import { useState, useEffect } from "react";

const navLinks = ["Home", "Shop", "About", "Gallery", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);

  // Handle scroll effect for desktop only
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect mobile screen size to disable color change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Navbar background logic: no color change on mobile, dynamic on desktop
  const navbarBgClass = !isMobile && scrolled
    ? "bg-white/90 backdrop-blur-md shadow-sm"
    : "bg-white";

  return (
    <>
      {/* Navbar */}
      <nav   
        className={`sticky font-geist top-0 z-50 w-full px-6 md:px-12 transition-all duration-300 ${navbarBgClass}`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 md:h-[68px]">

          {/* Left spacer - empty for centering links */}
          <div className="w-24 md:w-32"></div>

          {/* Desktop Nav Links - Centered */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => setActiveLink(link)}
                className={`relative text-[11px] tracking-[0.18em] uppercase font-light bg-transparent border-none cursor-pointer pb-0.5 transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-purple-700 after:transition-all after:duration-300 ${
                  activeLink === link
                    ? "text-purple-700 after:w-full"
                    : "text-neutral-700 hover:text-purple-700 after:w-0 hover:after:w-full"
                }`}
              >
                {link}
              </button>
            ))}
          </div>

          {/* Desktop Right Side - Only Shop Now Button */}
          <div className="hidden md:flex items-center justify-end">
            <button className="text-[11px] tracking-[0.2em] uppercase font-normal bg-[#800080] text-white rounded-full px-6 py-2.5 hover:bg-[#800080] transition-all duration-300 hover:-translate-y-px shadow-md hover:shadow-purple-300/50 hover:shadow-lg">
              Shop Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] z-50 relative p-1 ml-auto"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[22px] h-px bg-neutral-800 transition-all duration-300 origin-center ${
                menuOpen ? "translate-y-[6px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-px bg-neutral-800 transition-all duration-300 ${
                menuOpen ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block w-[22px] h-px bg-neutral-800 transition-all duration-300 origin-center ${
                menuOpen ? "-translate-y-[6px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Overlay Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-purple-50 flex flex-col items-center justify-center gap-10 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            onClick={() => { setActiveLink(link); setMenuOpen(false); }}
            className="font-geist italic font-medium text-base  hover:text-purple-700 transition-colors duration-200 tracking-wide"
          >
            {link}
          </a>
        ))}
        <button
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-[11px] tracking-[0.2em] uppercase font-normal bg-[#800080] text-white rounded-full px-8 py-3 hover:bg-[#800080] transition-all duration-300"
        >
          Shop Now
        </button>
      </div>
    </>
  );
}