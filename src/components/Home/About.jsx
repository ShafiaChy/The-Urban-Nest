import React from 'react';
import './Home.css'

const About = () => {
    return (
        <div className=' bg-fixed relative about-image flex justify-center mt-20 items-center'>
            <div class="absolute inset-0 bg-black/50"></div>
            <div className='bg-title  p-5 md:p-20 w-9/12 text-white text-center'>
           
                <h1 className='text-4xl mb-5 text'>UrbanNest</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
            
        </div>
    );
};

export default About;