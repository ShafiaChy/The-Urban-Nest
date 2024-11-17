import React, { useState, useEffect } from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const Card = ({ children }) => {
    // console.log(children)
    const { image, name, details, price } = children
console.log(name)
    return (
        <>
        <PhotoProvider>
            <PhotoView src={image}>
                <img className='h-16' width='80' style={{ borderRadius: "0 50% 50%" }} src={image} alt="" />
            </PhotoView>
        </PhotoProvider>
            
            <div className="items-center ">
                <h1 className="uppercase font-serif text-white">{name} ------------------</h1>
                <p className="text-white">{details}</p>
            </div>
            <p className="text-yellow-700">${price}</p>
        </>
    );
};

export default Card;