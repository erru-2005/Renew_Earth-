import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const Navigate = useNavigate();
  const hadleLogout = (e) => {
    e.preventDefault();
    localStorage.clear();
    Navigate("/");
  };
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 mt-8 mx-0.5 my-0.5 rounded-lg">
      {/* Footer Content */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-xl font-semibold text-gray-100">
            🌿 Renew Earth
          </h3>
          <p className="text-sm text-gray-400">
            Building a greener tomorrow, one plant at a time.
          </p>
        </div>

        {/* Links Section */}
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li>
            <a
              href="/about-us"
              className="hover:text-green-500 transition duration-200"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="/contact-us"
              className="hover:text-green-500 transition duration-200"
            >
              Contact Us
            </a>
          </li>
          
          <li>
            <Link
            onClick={(e) => {hadleLogout(e)}}
              to="/"
              className="hover:text-red-500 transition duration-200"
            >
              Logout
            </Link>
          </li>
        </ul>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-4"></div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Renew Earth. All rights reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-200"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-200"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-200"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-500 transition duration-200"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
