import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-white p-4 py-9 ">
      <div className="container mx-auto flex justify-between items-center px-32">
        {/* Logo or Brand Name */}
        <h1 className="text-4xl font-bold ">Service Foods</h1>
        
        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <Link to="/" className="hover:text-gray-400 transition"></Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-400 transition">About</Link>
            </li>
            <li>
              <Link to="/product" className="hover:text-gray-400 transition">Products</Link>
            </li>
            <li>
              <Link to="/career" className="hover:text-gray-400 transition">Careers</Link>
            </li>
            <li>
              <Link to="/content" className="hover:text-gray-400 transition">Content Hub</Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-400 transition">Contact</Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-gray-400 transition">Login</Link>
            </li>
            <li>
              <Link to="/create-account" className="hover:text-gray-400 transition">Create Account</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
