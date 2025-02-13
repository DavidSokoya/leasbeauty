import React from 'react';
import { hero1 } from '../img/index';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1} alt="Background" className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Lea's Beauty Parlour</h1>
          <p className="text-xl text-gray-50 mb-8">
            <a href="https://wa.me/2349151603321">Let's Beautify You!</a>
          </p>
          <a href="/bookings" className="bg-yellow-400 text-gray-900 py-2 px-6 rounded-full text-lg font-semibold hover:bg-yellow-300 transition">Book an Appointment</a>
        </div>
      </section>

      {/* About Us Section */}
      <section className="text-gray-600 body-font bg-gray-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Unveiling Your True Beauty
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed  text-2xl">
            At Lea's Beauty, we believe confidence starts with self-care. Our mission is to bring out the best in you by offering premium beauty products and personalized services tailored to your unique style. Whether it's a bold new look or a touch of everyday elegance, we're here to help you shine.
          </p>
        </div>
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">150+</h2>
              <p className="leading-relaxed">Happy Clients</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">10+</h2>
              <p className="leading-relaxed">Beauty Enthusiasts</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">20+</h2>
              <p className="leading-relaxed">Premium Products</p>
            </div>
          </div>
          <div className="p-4 md:w-1/4 sm:w-1/2 w-full">
            <div className="border-2 border-gray-200 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-3xl text-gray-900">2</h2>
              <p className="leading-relaxed">Luxury Locations</p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Contact Section with Map */}
      <section id="contact" className="text-gray-400 bg-gray-900 body-font relative py-16">
        <div className="container h-100 mx-auto flex flex-wrap">
          <div className="lg:w-3/5 h-auto md:w-1/2 bg-gray-900 rounded-lg overflow-hidden ml-10 p-10 relative">
            <iframe 
              width="100%" 
              height="100%" 
              title="map" 
              className="absolute inset-0"
              src="https://maps.google.com/maps?q=Ikorodu&t=&z=14&ie=UTF8&iwloc=&output=embed"
              style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.7)' }}
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
          <div className="bg-gray-900 relative p-6 rounded shadow-md">
              <h2 className="text-white font-semibold text-2xl">ADDRESS</h2>
              <p className="mt-1">Ginti Bus Stop, Ijede, Ikorodu, Lagos State.</p>
              <h2 className="text-white font-semibold text-2xl mt-4">WHATSAPP</h2>
              <a href="https://wa.me/2349151603321" className="text-yellow-400 text-xl">09151603321</a>
              <h2 className="text-white font-semibold text-2xl mt-4">PHONE</h2>
              <p className="leading-relaxed text-xl">09077988036</p>
            </div>
        </div>
      </section>
  
    </div>
  );
};

export default Home;
