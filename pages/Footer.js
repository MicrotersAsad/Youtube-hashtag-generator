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
                        <p className="mt-2">Generate YouTube hashtags effortlessly with our free tool. No signup, no credit card required—just quick and effective hashtag suggestions for your videos!</p>
                    </div>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Menu</h4>
                        <ul className="mt-2 space-y-2">
                            <li><Link href="/terms" className="text-white hover:text-gray-400">Terms and Condition
                            </Link></li>
                            <li><Link href="/privacy" className="text-white hover:text-gray-400">Privacy Policy</Link></li>
                            <li><Link href="/refund" className="text-white hover:text-gray-400">Refund Policy</Link></li>
                            <li><Link href="/contact" className="text-white hover:text-gray-400">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="p-5">
                        <h4 className="text-xl font-bold">Contact Us</h4>
                        <div className="mt-2 space-y-2">
                            <div className="flex items-center">
                                <i className="bi bi-telephone"></i>
                                <p className="pl-3">+05 773 325 777</p>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-envelope"></i>
                                <p className="pl-3">support@aihashtaggen.com</p>
                            </div>
                            <div className="flex items-center">
                                <i className="bi bi-geo-alt"></i>
                                <p className="pl-3">123 Innovation Way, Tech City, CA 94043</p>
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
                <h6 className="text-center text-primary font-bold mt-8">© 2025 ytubehashtag.com</h6>
            </div>
           
        </footer>
    );
};

export default Footer;