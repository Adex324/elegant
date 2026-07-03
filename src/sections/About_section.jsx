import React from 'react';
import elegant_star from "../assets/elegant_star.svg";

const About_section = () => {
  return (
    <section className="font-geist bg-white px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">
      <div className="max-w-5xl mx-auto">
        
        {/* Two-column layout: heading + text on left, gray image placeholder on right */}
        <div className="flex flex-col md:flex-row gap-8 md:gap-12">
          
          {/* Left column: heading and description */}
          
          <div className="flex-1 space-y-4">
            <div className="flex justify-left mb-3">
                    <div className="inline-flex items-left gap-1.5 px-3 py-1 rounded-full bg-[#800080]">
                      <img src={elegant_star} alt="" className="w-3 h-3" />
                      <p className="text-white text-xs font-medium">Elegant Woman</p>
                    </div>
                  </div>
            
            <h2 className="text-2xl  sm:text-2xl md:text-3xl font-medium text-neutral-900 leading-tight">
              About Elegant Woman
            </h2>
            <div className="text-neutral-700 text-base sm:text-lg leading-relaxed space-y-3">
              <p>
                ElegantWoman is a modest fashion and accessories brand 
                dedicated to creating elegant, stylish, and beautifully crafted 
                pieces for the modern woman.
              </p>
              <p>
                We specialize in embellished berets, beaded berets, beaded Alice 
                bands, fascinators, hatinators, bridal fans, and other refined 
                headwear and accessories.
              </p>
            </div>
          </div>

          {/* Right column: gray placeholder (image) */}
          <div className="flex-1 min-h-[250px] md:min-h-[300px] bg-gray-300 rounded-xl flex items-center justify-center">
            <span className="text-gray-500 text-sm">Image Placeholder</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About_section;