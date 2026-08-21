// pages/ProductDetails.jsx
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Services from "../sections/Services";
import Footer from "../components/Footer";
import delivery_icon from "../assets/delivery_2nd_icon.svg";
import return_icon from "../assets/return_icon.svg";

const COLOURS = ["#1a1a1a", "#4a4a4a", "#800080"];
const SIZES = ["XS", "S", "M", "L", "X"];

const StarIcon = ({ filled }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill={filled ? "#F59E0B" : "#D1D5DB"} className="w-4 h-4 inline-block">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.049 2.927z" />
  </svg>
);

const ProductDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const product = state?.product;

  const [selectedColour, setSelectedColour] = useState(COLOURS[0]);
  const [selectedSize, setSelectedSize] = useState("M");
  const [quantity, setQuantity] = useState(2);
  const [activeThumb, setActiveThumb] = useState(0);
  const [wishlisted, setWishlisted] = useState(false);

  // If someone navigates here directly without state, go back home
  if (!product) {
    return (
      <div className="font-geist flex flex-col items-center justify-center h-screen gap-4">
        <p className="text-neutral-600">Product not found.</p>
        <button onClick={() => navigate("/")} className="text-sm underline text-[#800080]">Go back home</button>
      </div>
    );
  }

  // Reuse the same image for all 4 thumbnails
  const thumbnails = [product.image, product.image, product.image, product.image];

  return (
    <div className="font-geist">
      {/* Top bar + Navbar */}
      <div>
        <p className="text-white bg-black flex justify-center text-center uppercase font-semibold text-xs sm:text-sm md:text-base p-2 sm:p-3">
          Worldwide Shipping Available
        </p>
        <Navbar />
      </div>

      {/* Product section */}
      <section className="px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16 bg-white">
        <div className="max-w-5xl mx-auto">

          {/* Main product layout */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-10 border border-neutral-200 rounded-xl p-5 md:p-8">

            {/* Left — Thumbnails */}
            <div className="flex md:flex-col flex-row gap-3 order-2 md:order-1">
              {thumbnails.map((thumb, i) => (
                <button
                  key={i}
                  onClick={() => setActiveThumb(i)}
                  className={`w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-colors duration-200 flex-shrink-0 ${
                    activeThumb === i ? "border-[#800080]" : "border-neutral-200"
                  }`}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Center — Main image */}
            <div className="flex-1 order-1 md:order-2 rounded-xl overflow-hidden bg-neutral-100 aspect-[4/3] md:aspect-auto md:min-h-[380px]">
              <img
                src={thumbnails[activeThumb]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right — Product info */}
            <div className="flex-1 order-3 flex flex-col gap-4">

              {/* Name */}
              <h1 className="text-2xl md:text-3xl font-semibold text-neutral-900">{product.name}</h1>

              {/* Stars + reviews + stock */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} filled={i < product.rating} />
                  ))}
                </div>
                <span className="text-sm text-neutral-400">({product.reviews} Reviews)</span>
                <span className="text-sm text-neutral-300">|</span>
                <span className="text-sm text-green-600 font-medium">In Stock</span>
              </div>

              {/* Price */}
              <p className="text-2xl font-medium text-neutral-900">${product.price}.00</p>

              {/* Description */}
              <p className="text-sm text-neutral-600 leading-relaxed border-b border-neutral-200 pb-4">
                {product.description}
              </p>

              {/* Colours */}
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-neutral-800 w-16">Colours:</p>
                <div className="flex items-center gap-2">
                  {COLOURS.map((colour) => (
                    <button
                      key={colour}
                      onClick={() => setSelectedColour(colour)}
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        selectedColour === colour ? "border-neutral-900 scale-110" : "border-transparent"
                      }`}
                      style={{ backgroundColor: colour }}
                    />
                  ))}
                </div>
              </div>

              {/* Sizes */}
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-neutral-800 w-16">Size:</p>
                <div className="flex items-center gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-9 h-9 text-xs font-medium border rounded transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-[#800080] text-white border-[#800080]"
                          : "bg-white text-neutral-700 border-neutral-300 hover:border-[#800080]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity + Buy Now + Wishlist */}
              <div className="flex items-center gap-3 mt-1">
                {/* Quantity control */}
                <div className="flex items-center border border-neutral-300 rounded overflow-hidden">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="w-9 h-10 text-lg text-neutral-600 hover:bg-neutral-100 transition-colors duration-200"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-sm font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="w-9 h-10 text-lg text-neutral-600 hover:bg-neutral-100 transition-colors duration-200"
                  >
                    +
                  </button>
                </div>

                {/* Buy Now */}
                <button className="flex-1 bg-[#800080] text-white text-sm font-medium py-2.5 rounded hover:bg-purple-900 transition-colors duration-200">
                  Buy Now
                </button>

                {/* Wishlist */}
                <button
                  onClick={() => setWishlisted((w) => !w)}
                  className={`w-10 h-10 flex items-center justify-center border rounded transition-colors duration-200 ${
                    wishlisted ? "bg-[#800080] border-[#800080] text-white" : "border-neutral-300 text-neutral-500 hover:border-[#800080]"
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill={wishlisted ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              {/* Delivery info */}
              <div className="border border-neutral-200 rounded-lg overflow-hidden mt-2">
                <div className="flex items-start gap-3 p-3 border-b border-neutral-200">
                  <img src={delivery_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Free Delivery</p>
                    <p className="text-xs text-neutral-500 mt-0.5 underline cursor-pointer">Enter your postal code for Delivery Availability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3">
                  <img src={return_icon} alt="" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Return Delivery</p>
                    <p className="text-xs text-neutral-500 mt-0.5">Free 30 Days Delivery Returns. <span className="underline cursor-pointer">Details</span></p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <Services />
      <Footer />
    </div>
  );
};

export default ProductDetails;