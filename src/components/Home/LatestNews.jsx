import React from 'react';
import image from '../../assets/asset/home/latestnews.jpg'
import Title from '../shared/Title/Title';

const LatestNews = () => {
    return (
        <div className='bg-fixed latest-news p-8 md:p-20 pt-10 relative text-white mt-20 '>

            <Title type={{ smallHeading: 'From our blog', title: 'Latest News', border: 'white' }}></Title>

            <div className="relative z-10 md:flex justify-center items-center">
                <div>
                    <img src={image} />
                </div>

                <div className='md:ml-10'>
                    <small>March 20, 2023</small>
                    <h1 className='uppercase'>Where Can I get some?</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                    <button className="btn border-b-4 border-white  border-0 bg-transparent text-white uppercase mt-10">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;