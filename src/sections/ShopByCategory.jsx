// sections/ShopByCategory.jsx
import React from "react";
import { Link } from "react-router-dom";
import elegant_star from "../assets/elegant_star.svg";
import white_hat from "../assets/white_hat.svg";
import red_hat from "../assets/red_hat.svg";
import black_hat from "../assets/black_hat.svg";
import blue_hat from "../assets/blue_hat.svg";
import whiteblue_hat from "../assets/whiteblue_hat.svg";
import gold_hat from "../assets/golden_hat.svg";

const categories = [
  { id: 1, name: "Embellished Pearl Beret",  image: white_hat,    price: 192, rating: 4, reviews: 150, description: "A timeless statement piece designed to elevate every look. Delicate pearl accents and soft feather details bring effortless elegance with a touch of drama." },
  { id: 2, name: "Crystal Studded Beret",    image: red_hat,      price: 210, rating: 5, reviews: 98,  description: "Dazzling crystal embellishments set on a rich red base — perfect for making a bold, unforgettable entrance." },
  { id: 3, name: "Floral Appliqué Beret",    image: black_hat,    price: 175, rating: 4, reviews: 73,  description: "Beautifully crafted floral appliqués adorn this elegant beret, blending artistry with wearable fashion." },
  { id: 4, name: "Wide-Brim Beret",          image: blue_hat,     price: 192, rating: 3, reviews: 150, description: "A timeless statement piece designed to elevate every look. Delicate pearl accents and soft feather details bring effortless elegance with a touch of drama." },
  { id: 5, name: "Appliqué Beaded Beret",    image: whiteblue_hat,price: 220, rating: 5, reviews: 112, description: "Intricate beaded appliqués meet soft fabric in this handcrafted piece, designed for the modern modest woman." },
  { id: 6, name: "Fully Beaded Beret",       image: gold_hat,     price: 250, rating: 5, reviews: 134, description: "Fully adorned with lustrous beads from brim to crown — a true heirloom piece for your most special occasions." },
];

const ShopByCategory = () => {
  return (
    <section className="font-geist bg-[#F5F0FA] px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">

      <div className="flex justify-center mb-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800080]">
          <img src={elegant_star} alt="" className="w-3 h-3" />
          <p className="text-white text-xs font-medium">Elegant Woman</p>
        </div>
      </div>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-medium text-neutral-900 mb-8 md:mb-10">
        Shop by Category
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 max-w-5xl mx-auto">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/product/${cat.id}`}
            state={{ product: cat }}
            className="relative rounded-xl overflow-hidden cursor-pointer group aspect-[3/4]"
          >
            <img
              src={cat.image}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 w-4/6 text-white text-lg sm:text-2xl md:text-3xl font-normal leading-snug">
              {cat.name}
            </p>
          </Link>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button className="border border-neutral-900 text-neutral-900 text-sm font-medium px-8 py-3 hover:bg-neutral-900 hover:text-white transition-colors duration-200">
          View All Products
        </button>
      </div>

    </section>
  );
};

export default ShopByCategory;