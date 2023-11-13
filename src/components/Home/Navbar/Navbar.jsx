import { useState, useEffect } from "react";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";

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
          <Link
            to="/"
            className="md:flex space-x-12 hidden text-2xl font-semibold"
          >
            Nazmul Ecomerce
          </Link>
          <ul className="md:flex space-x-12 hidden">
            <Link
              to="/"
              className="text-xl block text-gray-500 hover:text-green-700"
            >
              Home
            </Link>

            <Link
              to="/product"
              className="text-xl block text-gray-500 hover:text-blue-700"
            >
              product
            </Link>
            <Link
              to="/about"
              className="text-xl block text-gray-500 hover:text-blue-700"
            >
              about
            </Link>
            <Link
              to="/contact"
              className="text-xl block text-gray-500 hover:text-blue-700"
            >
              contact
            </Link>
          </ul>
          <div className="space-x-12 hidden lg:flex items-center">
            <Link
              to="/login"
              href="#"
              className="hidden lg:flex items-center text-green-300"
            >
              Login
            </Link>
            <Link to="/register">
              <button className="bg-green-300 text-white py-2 px-4 transition-all duration-300 rounded">
                Register
              </button>
            </Link>
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
          <Link
            to="/"
            className="block text-base text-gray-500 hover:text-blue-700"
          >
            Home
          </Link>
          <Link
            to="/product"
            className="block text-base text-gray-500 hover:text-blue-700"
          >
            product
          </Link>
          <Link
            to="/about"
            className="block text-base text-gray-500 hover:text-blue-700"
          >
            about
          </Link>
          <Link
            to="/contact"
            className="block text-base text-gray-500 hover:text-blue-700"
          >
            contact
          </Link>
          <Link to="/login" className="">
            <button className="mb-2 block w-full rounded border-2 border-primary px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:border-primary-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:border-primary-700 active:text-primary-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10">
              Login
            </button>
          </Link>
          <Link to="/register" className="">
            <button className="mb-2 block w-full rounded border-2 border-green-500 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-green-500 transition duration-150 ease-in-out hover:border-green-600 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-600 focus:border-green-600 focus:text-green-600 focus:outline-none focus:ring-0 active:border-green-700 active:text-green-700 dark:hover:bg-green-500 dark:hover:bg-opacity-10">
              Register
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
