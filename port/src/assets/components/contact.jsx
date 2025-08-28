import React from "react";
import { Phone, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 px-6 md:px-20 lg:px-32"
    >
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-green-400 mb-8">
          Contact Me
        </h2>

        {/* Contact Info */}
        <div className="space-y-6 max-w-xl mx-auto text-left">
          {/* Phone */}
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-400" />
            <p>
              <strong>Phone:</strong>{" "}
              <a
                href="tel:+917050085814"
                className="text-blue-400 hover:underline"
              >
                +91-7050085814
              </a>
            </p>
          </div>

          {/* Instagram */}
          <div className="flex items-center gap-4">
            <Instagram className="w-6 h-6 text-pink-500" />
            <p>
              <strong>Instagram:</strong>{" "}
              <a
                href="https://www.instagram.com/abhishek_.singh_.rajput_?igsh=ZXNpZWd5eHlsaHI5"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                @Abhishek Kumar
              </a>
            </p>
          </div>

          {/* LinkedIn */}
          <div className="flex items-center gap-4">
            <Linkedin className="w-6 h-6 text-blue-500" />
            <p>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/abhiskek-kumar-550196328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                @Abhishek Kumar
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
