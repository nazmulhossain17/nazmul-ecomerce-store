import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaXmark, FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { selectCart } from "../../../redux/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../redux/hook";
import { LuChevronsDown } from "react-icons/lu";
import {
  deleteUserFailure,
  deleteUserSuccess,
  signOutUserStart,
} from "../../../redux/user/userSlice";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const cart = useSelector(selectCart);
  const currentUser = useAppSelector((state) => state.user.currentUser);
  const dispatch = useAppDispatch();
  const headingStyle = {
    background: "linear-gradient(90deg, rgb(45 167 167), rgb(169 5 130))",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "gradient 3s linear infinite",
    "@keyframes gradient": {
      "0%": { backgroundPosition: "0% 75%" },
      "50%": { backgroundPosition: "100% 50%" },
      "100%": { backgroundPosition: "0% 70%" },
    },
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch(
        "https://nazmul-ecomerce-server-1wnx.vercel.app/api/auth/logout",
        {
          method: "GET",
          credentials: "include", // Include credentials (cookies) in the request
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }

      const data = await res.json();

      if (data.success === false) {
        dispatch(deleteUserFailure(data.message));
        return;
      }

      // Clear the access token on the client side (assuming you're using cookies)
      // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

      dispatch(deleteUserSuccess(data));
    } catch (error) {
      dispatch(deleteUserFailure(error.message));
    }
  };
  return (
    <header className="w-full bg-slate-100 md:bg-transparent fixed top-0 left-0 right-0">
      <nav
        className={`py-4 lg:px-14 px-4 bg-slate-100${
          isSticky
            ? "sticky top-0 bg-slate-100 left-0 right-0 border-b  duration-300"
            : ""
        }`}
      >
        <div className="flex justify-between items-center text-base gap-8">
          <Link
            to="/"
            style={headingStyle}
            className="md:flex space-x-12 hidden text-3xl font-monospace font-bold"
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
            {currentUser ? ( // Check if user is logged in
              <div className="relative inline-block text-left">
                <button
                  onClick={toggleDropdown}
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-dark"
                  id="dropdownButton"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  {currentUser?.user.name}
                  <hr />
                  <span className="mt-3">
                    <LuChevronsDown className="text-pink-900" />
                  </span>
                </button>

                {isDropdownOpen && (
                  <div
                    className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdownButton"
                  >
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <Link
                        to="/dashboard"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600"
                      >
                        Dashboard
                      </Link>
                    </div>
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <Link
                        to="/dashboard/update"
                        className="block px-4 py-2 text-sm text-gray-700 hover:text-green-600"
                      >
                        Settings
                      </Link>
                    </div>
                    <div
                      className="py-1"
                      role="menuitem"
                      onClick={closeDropdown}
                    >
                      <button
                        onClick={handleLogOut}
                        className="block px-4 py-2 text-sm text-gray-700  hover:text-red-600"
                      >
                        Log out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link to="/login">
                <button className="bg-green-300 text-white py-2 px-4 transition-all duration-300 rounded">
                  Login
                </button>
              </Link>
            )}
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
            <Link
              style={headingStyle}
              to="/"
              className="p-2 mx-3 text-3xl font-monospace font-bold"
            >
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
          {currentUser ? (
            <div className="relative inline-block text-right">
              <button
                onClick={toggleDropdown}
                type="button"
                className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-200"
                id="dropdownButton"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen ? "true" : "false"}
              >
                {currentUser.user.name}
              </button>
              {isDropdownOpen && (
                <div
                  className="origin-top-right absolute  mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="dropdownButton"
                  style={{ zIndex: 1001 }}
                >
                  <div className="py-1" role="menuitem" onClick={closeDropdown}>
                    <button className="w-full text-center py-2 text-sm text-black">
                      Dashboard
                    </button>
                  </div>
                  <div className="py-1" role="menuitem" onClick={closeDropdown}>
                    <button className="w-full text-center py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Settings
                    </button>
                  </div>
                  <div className="py-1" role="menuitem" onClick={closeDropdown}>
                    <button
                      onClick={handleLogOut}
                      className="w-full text-center py-2 text-sm text-red-700"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="bg-green-300 text-white py-2 px-4 transition-all duration-300 rounded">
                Login
              </button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
