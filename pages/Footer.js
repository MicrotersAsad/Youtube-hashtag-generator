import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons';
import logo from "../public/hahstag generator.png"
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
    return (
        <footer id="footer" className=" text-white py-8">
             <hr class="border-t-2 bg-white my-4" />
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="pt-5">
                    <Link className="text-white text-3xl font-bold" href="/">
        <Image src={logo} width={200} height={128}/>
        </Link>
                        <p className="mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos exercitationem ratione voluptatibus possimus culpa illo quia alias inventore, animi mollitia, repellat beatae modi facere accusantium!</p>
                    </div>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Menu</h4>
                        <ul className="mt-2 space-y-2">
                            <li><Link href="#about" className="text-white hover:text-gray-400">About Us</Link></li>
                            <li><Link href="#service" className="text-white hover:text-gray-400">Services</Link></li>
                            <li><Link href="#gallery" className="text-white hover:text-gray-400">Portfolio</Link></li>
                            <li><Link href="#contact" className="text-white hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Contact Us</h4>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <i className="bi bi-telephone"></i>
                                <p className="pl-3">(111) 222 3562</p>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-envelope"></i>
                                <p className="pl-3">Yourmail@gmail.com</p>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-geo-alt"></i>
                                <p className="pl-3">3225 N Harbar</p>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5">
                        <h4 className="text-xl font-bold">Follow Us</h4>
                        <div className="flex space-x-4 mt-3">
                            <Link href="#" className="text-white hover:text-gray-400"><Facebook /></Link>
                            <Link href="#" className="text-white hover:text-gray-400"><Twitter /></Link>
                            <Link href="#" className="text-white hover:text-gray-400"><Youtube /></Link>
                            <Link href="#" className="text-white hover:text-gray-400"><Instagram /></Link>
                        </div>
                    </div>
                </div>
                <h6 className="text-center text-primary font-bold mt-8">© 2023 ytubetools.com</h6>
            </div>
           
        </footer>
    );
};

export default Footer;