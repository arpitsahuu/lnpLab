import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Link, FacebookIcon, Facebook, Linkedin, Youtube } from 'lucide-react'

const ContactInfo = () => {
    return (
        <>
            <motion.div
                className="bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-lg backdrop-filter backdrop-blur-sm"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
            >
                <h2 className="text-2xl font-semibold mb-6 text-center">Contact Information</h2>
                <div className="space-y-6">
                    <motion.div
                        className="flex items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Mail className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />
                        <div>
                            <p className="text-lg  font-medium">Email</p>
                            <p className="text-gray-300">contact@tnplab.in</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <Phone className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />
                        <div>
                            <p className="text-lg font-medium">Phone</p>
                            <p className="text-gray-300">+91-9244107733</p>
                        </div>
                    </motion.div>
                    <motion.div
                        className="flex items-start bg-gray-700 bg-opacity-50 p-4 rounded-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                        <MapPin className="flex-shrink-0 h-6 w-6 text-blue-400 mr-4" />
                        <div>
                            <p className="text-lg font-medium">Address</p>
                            <p className="text-gray-300">B 48/1, Rajharsh Colony, Kolar Road, Bhopal - 462040, Madhya Pradesh, India</p>
                        </div>
                    </motion.div>
                </div>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4 text-center">Connect with us</h3>
                    <div >
                        <ul className='flex justify-center gap-4' >
                            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300" target='_blank'><Facebook /></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300" target='_blank'><Linkedin /></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300" target='_blank'><Youtube /></a></li>
                          
                        </ul>

                    </div>
                </div>
                
            </motion.div>
        </>
    )
}

export default ContactInfo