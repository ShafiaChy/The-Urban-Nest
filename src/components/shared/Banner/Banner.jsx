import React from 'react';
import './Banner.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import SliderOne from '../../../assets/asset/home/03.jpg'
import SliderTwo from '../../../assets/asset/home/02.jpg'
import SliderThree from '../../../assets/asset/home/01.jpg'
import SliderFour from '../../../assets/asset/home/01.jpg'


const Banner = ({ banner }) => {
    return (
        // follow index.css to apply thumbnail customization
        <Carousel autoPlay >
            <div><img src={SliderOne} />
            <div className="carousel-text"><h1 className='heading mb-2'>Discover the Art of Modern Living</h1>
            <p>Welcome to UrbanNest Furniture, where contemporary design meets everyday comfort. We’re here to help you create a home that’s as stylish as it is welcoming, with furniture crafted for life in the city. Explore our collection today and find the perfect pieces to build your own cozy nest.</p></div>
            </div>
            <div><img src={SliderTwo} /></div>
            <div><img src={SliderThree} /></div>
            <div><img src={SliderFour} /></div>
           
        </Carousel>
    );
};

export default Banner;