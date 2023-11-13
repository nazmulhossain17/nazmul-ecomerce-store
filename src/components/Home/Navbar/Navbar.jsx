import { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (Window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  });
  return (
    <header className="w-full bg-white md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 ${
          isSticky
            ? "sticky top-0 left-0 right-0 border-b bg-white duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <a
            href="#"
            className="text-2xl font-semibold flex items-center space-x-3"
          >
            Nazmul Ecomerce
          </a>
          <ul className="md:flex space-x-12 hidden">
            <li className="text-xl block text-gray-500 hover:text-green-700">
              Home
            </li>
            <li className="text-xl block text-gray-500 hover:text-blue-700">
              about
            </li>
            <li className="text-xl block text-gray-500 hover:text-blue-700">
              product
            </li>
            <li className="text-xl block text-gray-500 hover:text-blue-700">
              contact
            </li>
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <a href="#" className="hidden lg:flex items-center text-green-300">
              Login
            </a>
            <button className="bg-green-300 text-white py-2 px-4 transition-all duration-300 rounded">
              Register
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-400 focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? (
                <FaXmark className="h-6 w-6" />
              ) : (
                <FaBars className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        <div
          className={`space-y-4 px-4 mt-16 py-7 bg-white ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          <li className="block text-base text-gray-500 hover:text-blue-700">
            Home
          </li>
          <li className="block text-base text-gray-500 hover:text-blue-700">
            about
          </li>
          <li className="block text-base text-gray-500 hover:text-blue-700">
            product
          </li>
          <li className="block text-base text-gray-500 hover:text-blue-700">
            contact
          </li>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
