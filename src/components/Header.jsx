import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "#home" },
    { label: "Services", path: "#services" },
    { label: "Portfolio", path: "#portfolio" },
    { label: "About Us", path: "#about" },
    { label: "Blog", path: "/" },
    { label: "Contact", path: "#about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/">
            <div className="flex items-center space-x-2">
              <img
                src="/TechAmica.png"
                alt="Tech Amica Logo"
                className="transition-all duration-400 p-1 w-8 h-8 rounded-full md:w-10 md:h-10 bg-slate-200"
              />
              <div
                className={`font-extrabold text-black tracking-wide transition-all duration-300 ${
                  isScrolled ? "text-lg" : "text-xl sm:text-2xl"
                }`}
              >
                Tech Amica
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="text-black hover:text-white transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="px-4 py-2 bg-black text-white font-semibold rounded-md hover:bg-white hover:text-black transition-colors">
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white  transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} color={isScrolled ? "black" : "white"} />
            ) : (
              <Menu size={24} color={isScrolled ? "black" : "white"} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/55 shadow-lg">
            <ul className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.path}
                    className="block text-white  transition-colors text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="pt-4 border-t border-gray-700">
                <button
                  className="w-full px-4 py-2 bg-white text-black font-semibold rounded-md transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get a Quote
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
