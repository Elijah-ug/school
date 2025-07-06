import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* School info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Muko High School</h3>
          <p className="text-gray-300">
            Dedicated to academic excellence and character building, shaping future leaders since 1995.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-xl font-bold mb-2">Quick Links</h3>
                  <ul className="space-y-1 text-gray-300">
                      <li><Link to="academics" className="hover:text-gray-100">Academics</Link></li>
                      <li><Link to="about" className="hover:text-gray-100">About Us</Link></li>
                      <li><Link to="academics/academic-departments" className="hover:text-gray-100">Our Academics</Link></li>
                      <li><Link to="contacts" className="hover:text-gray-100">Contact Us</Link></li>

          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h3 className="text-xl font-bold mb-2">Contact</h3>
          <p className="text-gray-300">📞 +256 700 000004</p>
          <p className="text-gray-300">✉️ info@mukohigh.ac.ug</p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-gray-100">Facebook</a>
            <a href="#" className="hover:text-gray-100">Twitter</a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Muko High School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
