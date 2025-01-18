import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../public/hahstag generator.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-4 bg-black text-white shadow-lg fixed top-0 left-0 w-full z-50 mb-5">
      <div className="container mx-auto max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <Link href="/" passHref>
          <div className="flex items-center">
            <Image src={logo} width={150} height={64} alt="Hashtag Generator Logo" />
          </div>
        </Link>

        {/* Hamburger Menu */}
        <button
          className="text-white md:hidden focus:outline-none"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <div className="space-y-1.5">
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isOpen ? 'transform rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-opacity duration-300 ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`block w-8 h-1 bg-white transition-transform duration-300 ${
                isOpen ? 'transform -rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </div>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="hover:text-gray-300">
            Home
          </Link>
          <Link href="#Howitworks" className="hover:text-gray-300">
            How it works
          </Link>
          <Link href="/about" className="hover:text-gray-300">
            About Us
          </Link>
          <Link href="#price" className="hover:text-gray-300">
            Pricing
          </Link>
          <Link href="/review" className="hover:text-gray-300">
            Client Say
          </Link>
          <Link href="#Faq" className="hover:text-gray-300">
            FAQ
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-90 text-white z-40 transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 md:hidden`}
      >
        <div className="absolute top-4 right-4">
          {/* Close Button */}
          <button
            className="text-white text-2xl focus:outline-none"
            onClick={() => setIsOpen(false)}
            aria-label="Close navigation menu"
          >
            &times;
          </button>
        </div>

        <div className="flex flex-col items-center justify-center space-y-6 h-full mb-5">
          <Link href="/" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="#Howitworks" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            How it works
          </Link>
          <Link href="/about" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link href="#price" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Pricing
          </Link>
          <Link href="/review" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            Client Say
          </Link>
          <Link href="#Faq" className="text-2xl hover:text-gray-300" onClick={() => setIsOpen(false)}>
            FAQ
          </Link>
        </div>
      </div>
    </nav>
  );
}
