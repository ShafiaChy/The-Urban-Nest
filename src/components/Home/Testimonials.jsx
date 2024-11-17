import React, { useState, useEffect } from 'react';
import './Testimonials.css'
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import Rating from 'react-rating';

// Import Swiper styles


import { useQuery } from '@tanstack/react-query';

const Testimonials = () => {
    const { data: reviews = [], refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await fetch("https://bistro-boss-server.vercel.app/reviews");
            const data = await res.json();
            return data;
        }
    });
    const [checked, setChecked] = useState(true);
console.log(reviews)
    return (
        <div className="review-layout bg-black overflow-x-hidden">
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input
          type="radio"
          name="position"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          {reviews.map((review) => (
            <div className="item card-color">
              <div className="container ">
                <h3 className="mt-6 underline text-2xl text-white text-center text-decoration-underline">
                  {review.name}
                </h3>
                <p className="text-justify p-8 text-white h-80">{review.details}</p>
                <div className="d-flex p-4 text-center bg-dark">
                  
                 <Rating

                 initialRating={review.rating}
                 readonly
                 emptySymbol={<FaStar color="#ccc" size="2em" />} // Set the empty star icon and color
                 fullSymbol={<FaStar color="#d1a054" size="2em" />} // Set the full star icon and color
                />
                </div>
              </div>
            </div>
          ))}
        </main>
      </div>
    );
};

export default Testimonials;