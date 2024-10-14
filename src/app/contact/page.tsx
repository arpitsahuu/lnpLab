"use client"
import React from 'react'
import { motion } from 'framer-motion'
import ContactUsForm from '@/components/contact/ContactUsForm'
import ContactInfo from '@/components/contact/ContactInfo'
import Location from '@/components/location/Location'


const page = () => {
    return (
        <div className="min-h-screen bg-black text-white pt-12"
            style={{
                backgroundImage: "linear-gradient(to bottom right, rgba(0,0,255,0.1) 0%, transparent 50%), repeating-linear-gradient(to right, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)"
            }}>
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    <motion.h1
                        className="text-4xl font-bold mb-2 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        className="text-xl text-blue-400 mb-8 text-center"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        Get in touch with our expert team
                    </motion.p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <ContactUsForm />

                        <ContactInfo />
                    </div>
                </div>
            </main>
            <div className='sm:mx-16 mx-3 '>

                <Location />
            </div>

        </div>
    )
}

export default page