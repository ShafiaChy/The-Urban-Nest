import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaRocket, FaStar } from "react-icons/fa";
import Rating from 'react-rating';
import swal from 'sweetalert';
import Title from '../../components/shared/Title/Title';
import useAuth from '../../Hooks/useAuth';

const AddReview = () => {
    const { user } = useAuth()
    const [rating, setRating] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        details: '',
        image: null
    });

    const imageHostKey = '40f387f08ab881d665744d10287c41b8';
    const [imageFile, setImageFile] = useState(null);
    const handleImageChange = (event) => {
        setImageFile(event.target.files[0]);
    };
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleReset = () => {
        setFormData({
            name: '',
            details: '',
            image: null

        });
    };


    const handleAddReview = (e) => {

      
        e.preventDefault()
        // console.log(formData)
        // console.log(imageFile)

        const image = imageFile;
        const imageData = new FormData();
        imageData.append('image', image);

        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
        fetch(url, {
            method: 'POST',
            body: imageData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    // console.log(imgData.data.url);
                    formData.rating = rating
                  
                    formData.email = user?.email;
                    formData.image = imgData.data.url;
                    // console.log(formData);

                    fetch('https://the-urban-nest-server.vercel.app/reviews', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(formData)
                    })
                        .then(res => res.json())
                        .then(res => {
                            if (res.insertedId) {
                                swal({
                                    title: "Yahhh!!! ❤️😍",
                                    text: "Review Added",
                                    icon: "success",
                                })
                            }
                            else {
                                swal({
                                    title: "Sorry!! ",
                                    text: "Review Failed To Add 😭 😭 😭",
                                    icon: "danger",
                                })
                            }
                            handleReset();
                        })
                }
            })
    }




    return (
        <>
            <Helmet>
                <title>UN Restaurant  |  Add Review</title>
            </Helmet>
            <div className="w-full">
                <Title type={{ smallHeading: "Sharing is Caring!!!", title: "Give a review..." }}></Title>
            </div>
            <div className="bg-[#eceae380] mx-10 my-6 px-32 w-10/12 shadow-2xl mb-10">

                <p className="text text-animation text-lg my-4 text-center">Rate US!</p>
                <div className="text-center">
                    <Rating
                        emptySymbol={<FaStar color="#ccc" size="2em" />} // Set the empty star icon and color
                        fullSymbol={<FaStar color="#d1a054" size="2em" />} // Set the full star icon and color
                        onChange={(rate) => {
                            swal({
                                title: "Thank you!💐",
                                text: `You have given ${rate} ratings!!! ❤️😍`,

                            })
                            setRating(rate)

                        }}
                    />
                </div>
                <form className="rounded-lg p-8" onSubmit={handleAddReview}>
                    <div className="mb-4">

                        <input
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Name"

                            value={user.email}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Give your name.
                        </label>
                        <input
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="name"
                            name="name"
                            type="text"
                            placeholder="Your Name"
                            onChange={handleChange}
                            value={formData.name}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-gray-700 font-semibold mb-1 block">
                            Kindly express your care in a short way.
                        </label>
                        <textarea
                            className="block w-full rounded-md py-2 px-3 text-gray-700 placeholder-gray-400"
                            id="details"
                            name="details"
                            type="text"
                            rows="5"
                            placeholder="review in detail"
                            onChange={handleChange}
                            value={formData.details}
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            id="image"
                            name="image"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            required />
                    </div>

                    <div className="text-center mt-8">
                        <button className='btn4 flex justify-center items-center'>
                            Send Review
                            <FaRocket className="ml-2" />
                        </button>
                    </div>
                </form >

            </div >
        </>
    )
}

export default AddReview;