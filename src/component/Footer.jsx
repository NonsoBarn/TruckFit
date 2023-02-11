import { Link, NavLink } from "react-router-dom";
import { UilTruck } from "@iconscout/react-unicons";
const Footer = () => {
  return (
    <footer className="px-4 pb-4 mt-10 bg-white rounded-lg shadow md:px-6 md:py-8">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
        <NavLink to="/" className="flex items-center mb-4 sm:mb-0">
          <span className="flex marker:self-center text-xl font-semibold whitespace-nowrap ">
            <UilTruck size={28} className="mr-1 mt-0" />
            TruckFit
          </span>
        </NavLink>
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        ©{" "}
        <Link to="/" className="hover:underline">
          TruckFit™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
