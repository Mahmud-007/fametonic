// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <header>
      {/* Sale Banner with specific color gradient */}
      <div
        className="text-white text-center py-3 px-3"
        style={{ background: "linear-gradient(to right, #FC004E, #00E7F9)" }}
      >
        <p className="font-medium text-sm md:text-3xl">
          <span>🚀</span>
          <span className="font-bold text-[#00E7F9]">
            FRESH BEGINNINGS SALE:
          </span>{" "}
          Extra 25% OFF, Limited Spots - start your journey today!
        </p>
      </div>

      {/* Navigation */}
      <nav className="bg-black relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Mobile and Desktop Header Layout */}
          <div className="flex justify-between md:justify-between items-center py-4 md:py-6">
            {/* Logo container - centered on mobile, custom position on desktop */}
            <div className="md:flex items-center md:w-auto w-full">
              <div className="flex justify-center md:justify-start w-full md:w-auto md:ml-36">
                <Link href="/" className="block">
                  <div className="relative">
                    <Image
                      src="/fametonic-logo.svg"
                      alt="Fametonic"
                      width={140}
                      height={50}
                      priority
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>

            {/* Desktop menu - positioned more to the left */}
            <div className="hidden md:flex items-center md:-mr-24">
              <div className="flex space-x-8">
                <Link
                  href="/about"
                  className="text-zinc-300 hover:text-white transition-colors text-base font-medium"
                >
                  About us
                </Link>
                <Link
                  href="/contact"
                  className="text-zinc-300 hover:text-white transition-colors text-base font-medium"
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Mobile menu button - positioned on right */}
            <button
              className="md:hidden text-white focus:outline-none absolute right-4 top-4"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu with slide-in animation */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black z-50 transform transition-transform duration-300 ease-in-out md:hidden"
          >
            {/* Header inside mobile menu */}
            <div className="flex justify-center items-center relative px-4 py-4">
              {/* Logo in the mobile menu overlay */}
              <Link href="/" className="block">
                <div className="relative">
                  <Image
                    src="/fametonic-logo.svg"
                    alt="Fametonic"
                    width={140}
                    height={50}
                    priority
                    className="object-contain"
                  />
                </div>
              </Link>
              
              {/* Close button */}
              <button
                className="absolute right-4 text-white focus:outline-none"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            
            {/* Menu items */}
            <div className="flex flex-col items-center space-y-10 text-2xl pt-20">
              <Link
                href="/about"
                className="block text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About us
              </Link>
              <Link
                href="/contact"
                className="block text-white hover:text-pink-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}