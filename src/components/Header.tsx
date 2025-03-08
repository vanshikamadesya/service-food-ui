import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 top-0 md:top-5 font-inter w-full z-40 text-white py-5 px-6 md:px-10 lg:px-32">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo (Hidden in mobile when menu is open) */}
          {!isOpen && (
            <h1 className="text-2xl md:text-3xl tracking-widest font-extrabold md:mr-6 text-white md:text-white">
              SERVICE FOODS
            </h1>
          )}

          {/* Hamburger Menu - Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex font-inter">
            <ul className="flex space-x-6 text-lg  tracking-wider">
              <li>
                <Link to="/about" className="hover:text-gray-400 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/product" className="hover:text-gray-400 transition">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/career" className="hover:text-gray-400 transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/content" className="hover:text-gray-400 transition">
                  Content Hub
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-gray-400 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/create-account"
                  className="hover:text-gray-400 transition"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile Navigation Dropdown */}
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-[#332D25] p-12 flex flex-col">
            {/* Header Section with Logo and Close Button */}
            <div className="flex justify-between items-center w-full">
              <h1 className="text-2xl tracking-widest font-extrabold text-[#BCB5A4] ">
                SERVICE FOODS
              </h1>
              <button
                className="text-[#BCB5A4] focus:outline-none"
                onClick={() => setIsOpen(false)}
              >
                <X size={30} />
              </button>
            </div>

            {/* Horizontal Divider Including Close Button */}
            <div className="border-t-2 border-gray-500 w-full mt-6 mb-16  "></div>

            {/* Navigation Links */}
            <ul className="flex flex-col text-lg font-medium text-[#BCB5A4]  space-y-3 text-left">
              <li>
                <Link
                  to="/about"
                  className="hover:text-gray-400 text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/product"
                  className="hover:text-gray-400  text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/career"
                  className="hover:text-gray-400  text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/content"
                  className="hover:text-gray-400 text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Content Hub
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-gray-400 text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/login"
                  className="hover:text-gray-400 text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/create-account"
                  className="hover:text-gray-400 text-xl transition"
                  onClick={() => setIsOpen(false)}
                >
                  Create Account
                </Link>
              </li>
            </ul>

            <div className="border-t-2 border-gray-500 w-full mt-24   "></div>

            {/* Email and Social Icons */}
            <div className="mt-auto text-[#BCB5A4]">
              <p className="mt-8 text-left text-lg underline">
                hello@servicefoods.co.nz
              </p>
              <div className="flex justify-start mt-4 space-x-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition "
                >
                  <AiFillLinkedin size={30} />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <AiFillInstagram size={30} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 transition"
                >
                  <AiFillFacebook size={30} />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
