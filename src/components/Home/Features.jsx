import React from "react";

import { FaFileInvoiceDollar,FaRocketchat,FaRegEnvelopeOpen,FaStore } from "react-icons/fa6";



const features = [
  {
    title: "Transit Protocol",
    description: "Eget arcu dictum varius duis at lorem donec.",
    icon: <FaFileInvoiceDollar />
  },
  {
    title: "Chat Assistance",
    description: "Quam quisque id diam vel quam aecenas.",
    icon: <FaRocketchat />
  },
  {
    title: "Email Interaction",
    description: "Quis varius quam id diam vel lecento.",
    icon: <FaRegEnvelopeOpen />
  },
  {
    title: "Global Stores",
    description: "Condimentum id venenatis a vitae sapien.",
    icon: <FaStore />
  },
];

const Features = () => {
  return (
    <div className="md:flex md:justify-center md:gap-8  py-12">
    {features.map((feature, index) => (
      <div
        key={index}
        className="group flex flex-col items-center p-4 rounded-lg"
      >
        <div className="relative text-orange-500 text-7xl flex items-center justify-center w-32 h-24">
          <div  className="bg-gray-800 w-full h-14 rounded-full group-hover:bg-gray-600 transition duration-300 translate-x-7 z-0"></div>
          <div className="z-10">{feature.icon}</div>
        </div>
        <h3 className="mt-4 text-lg font-semibold text-white">{feature.title}</h3>
        <p className="text-center text-gray-400">{feature.description}</p>
      </div>
    ))}
  </div>

  );
};

export default Features;
