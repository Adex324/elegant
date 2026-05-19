import React from 'react';
import Navbar from '../components/Navbar';
import backgroundImage from '../assets/hero_background.png';
import green_star from "../assets/green_star.svg";

const Hero = () => {
  return (
    <section className='font-geist'>
      <div>
        <p className='text-white bg-black flex justify-center text-center uppercase font-semibold text-xs sm:text-sm md:text-base p-2 sm:p-3'>
          Worldwide Shipping Available
        </p>
        <Navbar />
      </div>

      {/* Full viewport hero section */}
      <div className="relative h-[85vh] sm:h-[90vh] md:h-screen w-full">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />

        {/* Dimming overlay */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content layer */}
        <div className="relative z-10 flex flex-col justify-end items-start h-full text-white px-5 sm:px-10 md:px-16 lg:px-20 pb-10 sm:pb-14 md:pb-20">

          {/* Badge */}
          <div className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EEE9E5]'>
            <img src={green_star} alt="" className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            <p className='text-black font-medium text-xs sm:text-sm'>Refined Style, Handcrafted</p>
          </div>

          {/* Text content */}
          <div className="text-left mt-3 max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl">
            <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight'>
              Handcrafted accessories to elevate every moment.
            </p>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-white/90 leading-relaxed max-w-prose">
              Designed for the modern woman, our pieces blend modesty with timeless elegance — perfect for both everyday beauty and special occasions.
            </p>
          </div>

          {/* CTA Button */}
          <button className='bg-white text-black px-6 py-3 mt-7 sm:mt-10 text-sm sm:text-base font-medium hover:bg-neutral-100 transition-colors duration-200'>
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;