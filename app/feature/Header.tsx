import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { fadeIn } from "~/utils/motion";
import { SwitchLightDarkMode } from "./SwitchLightDark";
import { headerRoutes } from "~/const/AppData";

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 shadow-lg z-10">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-between items-center">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="SD Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              SD-TEACH
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <SwitchLightDarkMode />

            <a
              href="#"
              className="ml-3 text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Log in
            </a>
            <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
              Get started
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {headerRoutes.map((route, index) => (
                <Link to={route.path} key={index}>
                  <motion.li
                    variants={fadeIn("down", "tween", index * 0.05, 0.5)}
                    initial="hidden"
                    animate="show"
                  >
                    {route.name}
                  </motion.li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
