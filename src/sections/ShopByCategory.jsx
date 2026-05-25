// sections/ShopByCategory.jsx
import React from "react";
import elegant_star from "../assets/elegant_star.svg";

// Replace these with your actual image imports
import white_hat from "../assets/white_hat.svg";
import red_hat from "../assets/red_hat.svg";
import black_hat from "../assets/black_hat.svg";
import blue_hat from "../assets/blue_hat.svg";
import whiteblue_hat from "../assets/whiteblue_hat.svg";
import gold_hat from "../assets/golden_hat.svg";

const categories = [
  { id: 1, name: "Embellished Pearl Beret",   image: white_hat },
  { id: 2, name: "Crystal Studded Beret",     image: red_hat },
  { id: 3, name: "Floral Appliqué Beret",     image: black_hat },
  { id: 4, name: "Wide-Brim Beret",           image: blue_hat },
  { id: 5, name: "Appliqué Beaded Beret",     image: whiteblue_hat },
  { id: 6, name: "Fully Beaded Beret",        image: gold_hat },
];

const ShopByCategory = () => {
  return (
    <section className="font-geist bg-[#F5F0FA] px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">

      {/* Badge */}
      <div className="flex justify-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800080]">
          <img src={elegant_star} alt="" className="w-3 h-3" />
          <p className="text-white text-xs font-medium">Elegant Woman</p>
        </div>
      </div>

      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 mb-8 md:mb-10">
        Shop by Category
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/4]"
          >
            {/* Image */}
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

            {/* Label */}
            <p className="absolute bottom-4 left-4 text-white text-sm sm:text-base md:text-lg font-medium leading-snug">
              {cat.name}
            </p>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-10">
        <button className="border border-neutral-900 text-neutral-900 text-sm font-medium px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors duration-200">
          View All Products
        </button>
      </div>

    </section>
  );
};

export default ShopByCategory;