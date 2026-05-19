import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/hero_background.png';
import green_star from "../assets/green_star.svg"
const Hero = () => {
  return (
    <section className='font-geist'>
      <div>
        <p className='text-white bg-black flex justify-center text-center uppercase font-semibold text-base p-3'>
          Worldwide Shipping Available
        </p>
        <Navbar />
      </div>

      {/* Full viewport hero section */}
      <div className="relative h-screen w-full">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        ></div>
        
        {/* Dimming overlay - covers whole area */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        {/* Content layer */}
      <div className="relative z-10 flex flex-col justify-end items-start h-full text-white px-20 pb-20">
  {/* Badge - now only as wide as its content */}
  <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE9E5]'>
    <img src={green_star} alt="" />
    <p className='text-black font-medium text-sm'>Refined Style, Handcrafted</p>
  </div>
  
  {/* Text content - also prevent unwanted stretching */}
  <div className="text-left mt-3 max-w-4xl">
    <p className='text-6xl'>Handcrafted accessories to elevate every moment.</p>
    <p className="mt-4">Designed for the modern woman, our pieces blend modesty with timeless elegance perfect for both everyday beauty and special occasions.</p>
  </div>
  <button className='bg-[#FFFFFF] text-black p-3 mt-10 text-base'>
    Shop now
  </button>
</div>
      </div>
    </section>
  );
};

export default Hero;