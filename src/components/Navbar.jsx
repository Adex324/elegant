import { useState, useEffect } from "react";

// Define links with URLs
const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "About", href: "/about" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

          {/* Desktop Nav Links - Centered, actual anchor tags */}
          <div className="hidden md:flex items-center justify-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative text-base font-light bg-transparent cursor-pointer pb-0.5 text-neutral-700 hover:text-[#800080] transition-colors duration-300 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#800080] after:transition-all after:duration-300 after:w-0 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Right Side - Only Shop Now Button */}
          <div className="hidden md:flex items-center justify-end">
            <a
              href="/shop"
              className="text-sm font-normal bg-[#800080] text-white rounded-full px-6 py-2.5 hover:bg-[#800080]/90 transition-all duration-300 hover:-translate-y-px shadow-md hover:shadow-purple-300/50 hover:shadow-lg"
            >
              Shop Now
            </a>
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

      {/* Mobile Overlay Menu - actual links */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-purple-50 flex flex-col items-center justify-center gap-10 transition-opacity duration-300 font-geist ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-xl font-medium text-neutral-800 hover:text-[#800080] transition-colors duration-200"
          >
            {link.name}
          </a>
        ))}
        <a
          href="/shop"
          onClick={() => setMenuOpen(false)}
          className="mt-4 text-sm font-normal bg-[#800080] text-white rounded-full px-8 py-3 hover:bg-[#800080]/90 transition-all duration-300"
        >
          Shop Now
        </a>
      </div>
    </>
  );
}