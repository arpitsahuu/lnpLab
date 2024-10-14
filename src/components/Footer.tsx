import { Facebook, Linkedin, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className=" py-12 mt-16 border-t-[1px] border-gray-700">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">About tnpLab</h3>
                        <p className="text-gray-400">Accelerate Your Success with Expert IT Services and Career-Boosting Training.</p>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-blue-300 transition duration-300">About Us</Link></li>
                            <li><Link href="/training" className="text-gray-400 hover:text-blue-300 transition duration-300">Training & placement</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-blue-300 transition duration-300">Contact Us</Link></li>
                            <li><a target='-_blank' href="#" className="text-gray-400 hover:text-blue-300 transition duration-300">IT Services</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Contact</h3>
                        <ul className="space-y-2">
                            <li className="text-gray-400"><a href="tel:+919244107733">Phone: +91-9244107733</a></li>
                            <li className="text-gray-400"><a href="mailto:contact@tnplab.in?subject=Let's%20Work%20Together">Email: contact@tnplab.in</a></li>
                            <li className="text-gray-400">B 48/1, Rajharsh Colony, Kolar Road, Bhopal - 462040, Madhya Pradesh, India</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                                <Twitter className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
                                {/* <GitHub className="w-6 h-6" /> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center items-center">
                    <p className="text-gray-400 text-sm mb-4 md:mb-0">
                        &copy; 2024 tnpLab. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>

    )
}

export default Footer

{/* <footer className="bg-gray-900 py-8 mt-16">
<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
    <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">About tnpLab</h3>
        <p className="text-gray-400">Empowering businesses with cutting-edge technology solutions since 2010.</p>
    </div>
    <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Quick Links</h3>
        <ul className="space-y-2">
            <li><Link href="/services" className="text-gray-400 hover:text-blue-300">Services</Link></li>
            <li><Link href="/portfolio" className="text-gray-400 hover:text-blue-300">Portfolio</Link></li>
            <li><Link href="/careers" className="text-gray-400 hover:text-blue-300">Careers</Link></li>
            <li><Link href="/privacy" className="text-gray-400 hover:text-blue-300">Privacy Policy</Link></li>
        </ul>
    </div>
    <div>
        <h3 className="text-lg font-semibold mb-4 text-gray-100">Newsletter</h3>
        <p className="text-gray-400 mb-2">Stay updated with our latest news and offers.</p>
        <form className="flex">
            <input
                type="email"
                placeholder="Your email"
                className="flex-grow p-2 bg-gray-800 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-r-md hover:bg-blue-600 transition duration-300"
            >
                Subscribe
            </button>
        </form>
    </div>
</div>
<div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
    <p>&copy; 2024 tnpLab. All rights reserved.</p>
</div>
</footer> */}