// components/Header.jsx
'use client';
// components/Header.jsx
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <header>
      {/* Sale Banner with specific color gradient */}
      <div className="text-white text-center py-3 px-3" style={{ background: 'linear-gradient(to right, #FC004E, #00E7F9)' }}>
        <p className="font-medium text-3xl">
          <span className="inline-block mr-2">🚀</span>
          <span style={{ color: '#00E7F9' }} className="font-bold">FRESH BEGINNINGS SALE:</span> Extra 25% OFF, Limited Spots - start your journey today!
        </p>
      </div>

      {/* Navigation - Improved alignment */}
      <nav className="bg-black flex justify-between items-center px-8 py-6">
        {/* Logo container with proper positioning */}
        <div className="flex items-center">
          <Link href="/" className="block">
            <div className="relative">
              {/* If you have the actual logo image: */}
              <Image 
                src="/fametonic-logo.svg" 
                alt="Fametonic" 
                width={140}
                height={50}
                className="object-contain"
              />
              
              {/* If using the glitch text effect as a fallback: */}
              {/* <div className="logo-glitch">
                <h1 className="text-3xl font-bold">
                  <span className="text-white">fame</span>
                  <span className="text-white">tonic</span>
                </h1>
              </div> */}
            </div>
          </Link>
        </div>
        
        {/* Menu options with proper vertical alignment */}
        <div className="hidden md:flex items-center h-full">
          <div className="flex space-x-12">
            <Link href="/about" className="text-zinc-300 hover:text-white transition-colors text-base font-medium">About us</Link>
            <Link href="/contact" className="text-zinc-300 hover:text-white transition-colors text-base font-medium">Contact</Link>
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-zinc-900 py-4">
          <Link href="/about" className="block px-6 py-2 hover:bg-zinc-800 text-white">About us</Link>
          <Link href="/contact" className="block px-6 py-2 hover:bg-zinc-800 text-white">Contact</Link>
        </div>
      )}
    </header>
  );
}