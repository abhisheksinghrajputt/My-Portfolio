import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center border-t border-gray-800">
      <p className="text-sm">
        © {new Date().getFullYear()} Abhishek Kumar. All Rights Reserved.
      </p>
      <p className="mt-2 text-xs">
        Built with <span className="text-green-400 font-semibold">React</span> &{" "}
        <span className="text-blue-400 font-semibold">Tailwind CSS</span>.
      </p>
    </footer>
  );
};

export default Footer;
