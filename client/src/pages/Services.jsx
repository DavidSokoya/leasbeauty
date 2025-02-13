import React from 'react';
import { services } from '../utils/services';

const Services = () => {
  return (
    <section id="services" className="bg-gray-900 text-white py-24">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-yellow-400 mb-6">WHAT WE DO</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-12">
          We offer a welcoming and friendly environment for all your hair and beauty needs.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg">
              <img
                src={service.img}
                alt={service.name}
                className="w-full h-72 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 p-6">
                <h2 className="text-xl font-semibold text-yellow-400 mb-2">{service.name}</h2>
                <p className="text-gray-200 text-center">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
