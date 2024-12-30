import { useState } from 'react';
import logo from "../public/hahstag generator.png"
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="p-2 shadow-lg shadow-white">
      <div className="container mx-auto max-w-7xl px-4 flex items-center justify-between">
        <Link className="text-white text-3xl font-bold" href="/">
        <Image src={logo} width={200} height={128}/>
        </Link>
        <button className="text-white md:hidden" type="button" onClick={toggleMenu}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className={`md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'}`}>
<Link className="text-white uppercase block mt-4 md:mt-0" href="/">Home</Link>
<Link className="text-white uppercase block mt-4 md:mt-0" href="#Howitworks">How it works</Link>
<Link className="text-white uppercase block mt-4 md:mt-0" href="/about">About Us</Link>
<Link className="text-white uppercase block mt-4 md:mt-0" href="#price">Pricing</Link>
<Link className="text-white uppercase block mt-4 md:mt-0" href="/review">Client Say</Link>
<Link className="text-white uppercase block mt-4 md:mt-0" href="#Faq">Faq</Link>
        </div>
      </div>
      <hr class="border-t-2 bg-white my-2" />

    </nav>
  );
}