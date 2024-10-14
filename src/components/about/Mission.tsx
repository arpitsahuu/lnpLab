import Image from 'next/image';
import React from 'react';
import missionimg from "../../assets/about.svg"

// Import or define the image correctly, like this:
// import denefig1 from 'path_to_image/denefig1.jpg'; // or use an actual URL

const Mission = () => {
  return (
    <section className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="animate-fadeIn text-gray-400">
          <p className="text-lg mb-6">
            At TMP Labs, we&apos;re dedicated to bridging the gap between education and industry demands. Our mission is to provide top-tier IT training and services that not only equip individuals with the skills they need but also ensure their success in the competitive tech landscape.
          </p>
          <p className="text-lg">
            We believe in the power of practical, hands-on learning combined with expert guidance. That&apos;s why we offer a unique blend of comprehensive training programs and professional IT services, all designed to accelerate your career growth and drive business success.
          </p>
        </div>
        <div className="animate-fadeIn p-1 rounded-lg transform hover:scale-105 transition-transform duration-300">
          <Image
            src={missionimg} // Update the image path accordingly
            width={500}
            height={500}
            alt="TMP Labs Training Session"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Mission;
