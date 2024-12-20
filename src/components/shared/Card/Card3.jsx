import React from 'react';

const Card3 = ({ children, icon }) => {
    // console.log(children, icon)
    const {  name, data } = children
    return (

        <div className=" border-solid border-2">
            <div className=' price bg-[#d1a054] flex justify-center px-4 py-2 text-white'>{icon}</div>
            <div className="px-4 py-4">
                <div className="card  w-96  border-dotted border-2">
                    <div className=" card-body place-items-center  pb-10">
                        <h2 className="card-title text-white">{name}</h2>
                        <p className='text-white'>{data[0]}</p>
                        {data[1] ? <p className='text-white'>{data[1]}</p> : <div className="h-6"></div>}
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Card3;