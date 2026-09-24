import React from 'react';

export default function CtaBannerSection({
  title = "Find the piece that tells your story.",
  buttonText = "Shop Elegant Woman",
  buttonHref = "#shop",
  onButtonClick,
  className = "",
}) {
  return (
    <section 
      aria-label="Call to Action"
      className={`w-full bg-[#8c0882] relative overflow-hidden py-16 sm:py-24 lg:py-28 px-6 sm:px-10 text-center ${className}`}
    >
      <div 
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-black/20"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center space-y-6 sm:space-y-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <div className="pt-2">
          {onButtonClick ? (
            <button
              onClick={onButtonClick}
              type="button"
              className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-md bg-white text-neutral-900 font-semibold text-sm sm:text-base shadow-lg hover:bg-neutral-100 hover:shadow-xl transform active:scale-95 transition-all duration-200 cursor-pointer"
            >
              {buttonText}
            </button>
          ) : (
            <a
              href={buttonHref}
              className="inline-flex items-center justify-center px-7 sm:px-9 py-3 sm:py-3.5 rounded-md bg-white text-neutral-900 font-semibold text-sm sm:text-base shadow-lg hover:bg-neutral-100 hover:shadow-xl transform active:scale-95 transition-all duration-200"
            >
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}