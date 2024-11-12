import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import useAuth from '../../Hooks/useAuth';

const CheckoutForm = ({ order }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const { user } = useAuth()


    const stripe = useStripe();

    const elements = useElements();
    const { formattedDate, email, name, total, category } = order;
    // console.log(order)
    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        if (total) {
            fetch("https://bistro-boss-server.vercel.app/create-payment-intent", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ order }),
            })
                .then((res) => res.json())
                .then((data) => setClientSecret(data.clientSecret));
        }
    }, [total]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return
        }

        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        });

        if (error) {
            console.log(error);
            setCardError(error.message);
        }
        else {
            setCardError('');
        }
        setSuccess('');
        setProcessing(true);
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    },
                },
            },
        );

        if (confirmError) {
            setCardError(confirmError.message);
            return;
        }
        if (paymentIntent.status === "succeeded") {
            console.log('card info', card);
            // store payment info in the database
            const payment = {
                total,
                transactionId: paymentIntent.id,
                email,
                category,
                date: formattedDate,
                order,
                name:user.displayName
            }
            fetch('https://bistro-boss-server.vercel.app/payments', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',

                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        fetch(`https://bistro-boss-server.vercel.app/carts?email=${user.email}&delete=true`, {
                            method: 'DELETE',

                        })
                            .then(res => res.json())
                            .then(data => {
                                console.log(data)


                            });
                        setSuccess('Congrats! your payment completed');
                        setTransactionId(paymentIntent.id);
                    }
                })
        }
        setProcessing(false);


    }

    return (
        <>
            <Helmet>
                <title>BB Restaurant |  Checkout</title>
            </Helmet>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',

                                '::placeholder': {
                                    color: '#aab7c4',
                                },


                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button

                    className='btn px-20 py-2 flex mx-auto btn-sm mt-14 btn-primary '
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}

                >
                    Pay
                </button>
            </form>
            <p className="text-red-500">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>success</p>
                    <p>Your transactionId: <span className='font-bold'>{transactionId}</span></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;