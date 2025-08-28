import React from "react";
import { Code, Smartphone, Layout } from "lucide-react"; // icons from lucide-react

const Services = () => {
  return (
    <section
      id="services"
      className="bg-black text-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-4">
          My Services
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          I provide modern and responsive web development solutions to help you
          build powerful and user-friendly digital experiences.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Service 1 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 hover:scale-105 transition-transform duration-300">
            <Code className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Web Development</h3>
            <p className="text-gray-400">
              Building fast, modern, and scalable websites with clean and
              maintainable code.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 hover:scale-105 transition-transform duration-300">
            <Smartphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">Responsive Design</h3>
            <p className="text-gray-400">
              Creating mobile-friendly, fully responsive designs that look great
              on any device.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-800 hover:border-green-400 hover:scale-105 transition-transform duration-300">
            <Layout className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-gray-400">
              Designing intuitive and user-friendly interfaces that enhance user
              experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
