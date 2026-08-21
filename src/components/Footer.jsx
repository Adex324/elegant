// sections/Footer.jsx
import React, { useState } from 'react';
import facebook_icon from "../assets/facebook_icon.svg";
import twitter_icon from "../assets/twitter_icon.svg";
import instagram_icon from "../assets/instagram_icon.svg";
import linkedin_icon from "../assets/linkedin_icon.svg";
import send_icon from "../assets/send_icon.svg";

const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    <footer className="font-geist bg-black text-white">

      {/* Main footer content */}
      <div className="px-5 sm:px-10 md:px-16 lg:px-20 py-12 md:py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">

          {/* Column 1 — Brand + Subscribe */}
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <p className="text-xl font-bold">Elegant Woman</p>
            <p className="text-sm font-medium">Subscribe</p>
            <p className="text-sm text-neutral-400">Get 10% off your first order</p>

            {/* Email input */}
            <div className="flex items-center border border-neutral-600 rounded-sm overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-sm text-white placeholder-neutral-500 px-3 py-2 flex-1 outline-none"
              />
              <button className="px-3 py-2 hover:bg-neutral-800 transition-colors duration-200">
              <img src={send_icon} alt="" className="w-4 h-4 min-w-[16px]" />
              </button>
            </div>
          </div>

          {/* Column 2 — Support */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium">Support</p>
            <div className="flex flex-col gap-2 text-sm text-neutral-400">
              <p>111 Bijoy sarani, Lagos, Nigeria.</p>
              <p>elegantwoman@gmail.com</p>
              <p>+234-800-0000-0000</p>
            </div>
          </div>

          {/* Column 3 — Account */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium">Account</p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {["My Account", "Login / Register", "Cart", "Wishlist", "Shop"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Quick Links + Socials */}
          <div className="flex flex-col gap-4">
            <p className="text-base font-medium">Quick Link</p>
            <ul className="flex flex-col gap-2 text-sm text-neutral-400">
              {["Privacy Policy", "Terms Of Use", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{item}</a>
                </li>
              ))}
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { icon: facebook_icon, label: "Facebook" },
                { icon: twitter_icon, label: "Twitter" },
                { icon: instagram_icon, label: "Instagram" },
                { icon: linkedin_icon, label: "LinkedIn" },
              ].map(({ icon, label }) => (
                <a key={label} href="#" aria-label={label} className="hover:opacity-70 transition-opacity duration-200">
                  <img src={icon} alt={label} className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-neutral-800 py-4 text-center text-xs text-neutral-500">
        © Copyright Elegant Woman 2026. All right reserved
      </div>

    </footer>
  );
};

export default Footer;