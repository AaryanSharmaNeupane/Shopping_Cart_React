import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/company_logo.png";

export const Footer = () => {
  return (
    <footer className="border-t border-zinc-800  dark:bg-gray-900 max-w-7xl justify-center m-auto">
      <div className="w-1/2 mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-10" alt="Company Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Shopping Cart
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="https://www.linkedin.com/in/aaryan-sharma09/"
                className="hover:underline me-4 md:me-6"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </li>

            <li>
              <a
                href="https://github.com/AaryanSharmaNeupane"
                className="hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </div>

        <span className="block mt-3 text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024
          <Link to="/" className="hover:underline">
            Shopping Cart™
          </Link>
          . All Rights Reserved.
          <p>Rustu's Tech</p>
        </span>
      </div>
    </footer>
  );
};
