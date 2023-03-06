import { UilTruck } from "@iconscout/react-unicons";
import { UilShoppingCart } from "@iconscout/react-unicons";
import { UilTimes } from "@iconscout/react-unicons";
import { UilUser } from "@iconscout/react-unicons";
import { UilBars } from "@iconscout/react-unicons";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useState } from "react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavOpen = () => {
    setIsOpen(true);
  };

  const mobileNavClose = () => {
    setIsOpen(false);
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  return (
    <div>
      <nav className="bg-white px-2 sm:px-4 py-2.5  fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="navmenu-btns md:hidden">
            <button
              onClick={mobileNavOpen}
              type="button"
              className={
                !isOpen
                  ? "inline-flex items-center p-2 text-sm   md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  "
                  : "hidden"
              }
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <UilBars size={20} className="mr-1" />
            </button>
            <button
              onClick={mobileNavClose}
              type="button"
              className={
                isOpen
                  ? "inline-flex items-center p-2 text-sm   md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200  "
                  : "hidden"
              }
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <UilTimes size={20} className="mr-1" />
            </button>
          </div>
          <NavLink to="/" className="flex items-center">
            <span className="flex marker:self-center text-xl font-semibold whitespace-nowrap ">
              <UilTruck size={28} className="mr-1 mt-0" />
              TruckFit
            </span>
          </NavLink>
          <div className="flex md:order-2">
            {/* user */}
            <NavLink
              to="/login"
              className="font-sans lg:mt-0 lg:ml-6 align-middle text-black hover:text-gray-700"
            >
              <button href="#" className="relative flex">
                <UilUser size={28} className="mr-2" />
              </button>
            </NavLink>

            {/* cart btn */}
            <NavLink
              to="/cart"
              className="font-sans lg:mt-0 lg:ml-6 align-middle text-black"
            >
              <button role="button" className="relative flex">
                <UilShoppingCart size={28} className="" />
                <span className="absolute right-0 left-3 top-0 rounded-full bg-red-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-xs  leading-tight text-center">
                  {cartTotalQuantity}
                </span>
              </button>
            </NavLink>
          </div>
          <div
            className={
              isOpen
                ? "md:items-center justify-between  w-full md:flex md:w-auto md:order-1"
                : "md:items-center justify-between hidden  w-full md:flex md:w-auto md:order-1"
            }
            id="navbar-sticky"
          >
            <ul className="md:flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white ">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/products"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 "
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
