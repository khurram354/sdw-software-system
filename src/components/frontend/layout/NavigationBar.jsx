"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", link: "/" },
    { 
      name: "Features", 
      link: "/features",
    },
    { 
      name: "Industries", 
      link: "/industries",
    },
    { name: "Contact", 
      link: "/contact"
    },
  ];

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${
      scrolled 
        ? "bg-linear-to-b from-gray-900/95 to-gray-900/90 backdrop-blur-xl shadow-2xl shadow-blue-900/20 border-b border-gray-800/30" 
        : "bg-linear-to-b from-gray-900 to-gray-400"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="p-2 rounded-lg hover:bg-gray-800/50 transition-all duration-200"
            >
              <Menu className="w-6 h-6 stroke-2 text-gray-300" />
            </button>
          </div>
          <div className="flex items-center absolute left-1/2 transform -translate-x-1/2 md:relative md:left-0 md:transform-none">
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-all duration-300">
                  <span className="text-white font-bold text-lg">DS</span>
                </div>
                <div className="absolute -inset-1 bg-linear-to-r from-blue-600 to-cyan-500 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>
              <div className="hidden md:block">
                <span className="text-xl font-bold bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  DS System
                </span>
                <p className="text-xs text-gray-300">Distribution Solutions</p>
              </div>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, index) =>
                <Link
                  key={index}
                  href={item.link}
                  className="px-4 py-3 text-gray-100 hover:text-white font-medium text-md transition-all duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-linear-to-r from-blue-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>             
            )}
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <Link href={`/contact#book-your-demo`} className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-medium rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300">
              Book Demo
            </Link>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-linear-to-b from-gray-900 to-gray-950 border-t border-gray-800/50 shadow-2xl">
          <div className="px-4 py-6 space-y-1">
            {menuItems.map((item, index) =>
                <Link
                  key={index}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block font-medium text-gray-300 hover:text-white py-3 hover:bg-gray-800/30 rounded-lg px-2 transition-all duration-200"
                >
                  {item.name}
                </Link>
            )}
            <div className="pt-6 space-y-4">
              <Link href={`/contact#book-your-demo`} className="block w-full py-3 bg-linear-to-r from-blue-600 to-cyan-500 text-white font-semibold text-center rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 text-md-center">
                Book Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;