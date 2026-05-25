// Shop_now.jsx
import React from "react";
import shop_star from "../assets/shop_star.svg";

const items = [...Array(18)].map((_, i) => i);

const Shop_now = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#800080] py-2">
      {/* Inject keyframe once — only animation definition, no layout or color styles */}
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-50%) } }`}</style>

      <div
        className="flex w-max"
        style={{ animation: "marquee 20s linear infinite" }}
      >
        {/* Two identical sets for seamless loop */}
        {[...Array(2)].map((_, set) =>
          items.map((i) => (
            <div
              key={`${set}-${i}`}
              className="inline-flex items-center gap-1 mx-4 text-xs font-medium uppercase tracking-wide text-white whitespace-nowrap"
            >
              SHOP NOW
              <img src={shop_star} alt="" className="w-2 h-2" />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Shop_now;