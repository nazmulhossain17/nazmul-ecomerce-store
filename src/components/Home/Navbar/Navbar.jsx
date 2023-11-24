import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { selectCart } from "../../../redux/features/cart/cartSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const cart = useSelector(selectCart);

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
            <Link to="/login">
              <button className="bg-green-300 text-white py-2 px-4 transition-all duration-300 rounded">
                Login
              </button>
            </Link>
            <Link to="/cart">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="ml-1">{cart.products.length}</span> */}
              <div className="relative py-2">
                <div className="t-0 absolute left-3">
                  <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                    {cart.products.length}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="file: mt-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </div>
            </Link>
          </div>

          <div className="md:hidden my-2">
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
            <Link to="/" className="p-2 mx-3 text-2xl font-semibold">
              Nazmul Ecomerce
            </Link>
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
          <Link
            to="/cart"
            className="block text-base text-gray-500 hover:text-blue-700"
          >
            Cart
          </Link>
          <Link to="/login" className="">
            <button className="mb-2 block w-full rounded border-2 border-green-500 px-6 pb-2 pt-2 text-xs font-medium uppercase leading-normal text-green-500 transition duration-150 ease-in-out hover:border-green-600 hover:bg-green-500 hover:bg-opacity-10 hover:text-green-600 focus:border-green-600 focus:text-green-600 focus:outline-none focus:ring-0 active:border-green-700 active:text-green-700 dark:hover:bg-green-500 dark:hover:bg-opacity-10">
              login
            </button>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
