import React from 'react';
import elegant_star from "../assets/elegant_star.svg";
import arrival_hat from "../assets/arrival_hat.svg";

const arrivals = [
  { id: 1, name: "Embellished Pearl Beret",   image: arrival_hat, price: "N260", dashed_price: "N300", star: 5 },
  { id: 2, name: "Crystal Studded Beret",     image: arrival_hat, price: "N320", dashed_price: "N350", star: 4 },
  { id: 3, name: "Floral Appliqué Beret",     image: arrival_hat, price: "N280", dashed_price: "N320", star: 4 },
  { id: 4, name: "Wide-Brim Beret",           image: arrival_hat, price: "N350", dashed_price: "N400", star: 5 },
  { id: 5, name: "Appliqué Beaded Beret",     image: arrival_hat, price: "N400", dashed_price: "N450", star: 5 },
  { id: 6, name: "Fully Beaded Beret",        image: arrival_hat, price: "N450", dashed_price: "N500", star: 5 },
  { id: 7, name: "Appliqué Beaded Beret",     image: arrival_hat, price: "N400", dashed_price: "N450", star: 5 },
  { id: 8, name: "Floral Appliqué Beret",     image: arrival_hat, price: "N280", dashed_price: "N320", star: 4 },
];

// Star SVG component
const StarIcon = ({ filled }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "#F59E0B" : "#D1D5DB"}
    className="w-4 h-4 inline-block"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

// Helper to render star rating
const renderStars = (count) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<StarIcon key={i} filled={i <= count} />);
  }
  return stars;
};

const New_arrivals = () => {
  return (
    <section className="font-geist bg-white px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">
      {/* Outer container – matches the About section's max width */}
      <div className="max-w-5xl mx-auto">

        <div className="flex justify-center mb-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800080]">
            <img src={elegant_star} alt="" className="w-3 h-3" />
            <p className="text-white text-xs font-medium">Elegant Woman</p>
          </div>
        </div>

        <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 mb-8 md:mb-10">
          New Arrivals
        </h2>

        {/* Grid – product cards */}
       <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8">
          {arrivals.map((hat) => (
            <div key={hat.id} className="flex flex-col">
              
              <div className="aspect-[4/3] overflow-hidden rounded-xl bg-neutral-100">
                <img
                  src={hat.image}
                  alt={hat.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              <div className="mt-2 space-y-1">
                <p className="text-neutral-800 text-sm sm:text-base font-medium leading-snug">
                  {hat.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-[#DB4444] font-semibold text-sm sm:text-base">
                    {hat.price}
                  </span>
                  <span className="text-neutral-400 text-xs line-through">
                    {hat.dashed_price}
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="flex items-center gap-0.5">
                    {renderStars(hat.star)}
                  </span>
                  <span className="text-neutral-400 text-[10px] sm:text-xs">
                    (65)
                  </span>
                </div>
                <button className="w-full mt-1 py-1.5 px-3 bg-[#000000] text-white text-xs sm:text-sm font-medium rounded-sm hover:bg-[#800080] transition-colors duration-300">
                  Add To Cart
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default New_arrivals;