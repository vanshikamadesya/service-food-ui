import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="fixed left-0 md:top-5  w-full z-40  text-white py-5 px-6 md:px-10 lg:px-32">
        <div className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl md:text-xl tracking-widest font-extrabold md:mr-6">
            SERVICE FOODS
          </h1>

          {/* Hamburger Menu - Mobile */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-6 text-md font-inter tracking-wider">
              {/* <li>
                <Link to="/" className="hover:text-gray-400 transition">
                  Home
                </Link>
              </li> */}
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
          <div className="md:hidden mt-4 bg-black/20 backdrop-blur-md rounded-lg p-4">
            <ul className="flex flex-col space-y-3 text-lg font-medium">
              <li>
                <Link to="/" className="hover:text-gray-400 transition">
                  Home
                </Link>
              </li>
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
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
