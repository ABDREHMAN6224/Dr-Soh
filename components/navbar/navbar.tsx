"use client";
import { navLinks } from "@/lib/constants/nav";
import { LinkType } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showNavBar, setShowNavBar] = useState(false);

  return (
    <div className="absolute w-full p-4 lg:px-16 xl:px-28 xl:py-7">
      <nav
        className={`bg-white relative border-gray-200 rounded-md lg:rounded-xl z-50 shadow-[0_2px_6px_0_rgba(0,0,0,0.12)]`}
        id="navbar"
      >
        <div className="flex flex-wrap justify-between  items-center md:space-x-6 lg:space-x-[2.75rem] mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
            <div className="flex space-x-3 items-end">
            <h3 className="text-lg font-bold text-gray-800">Sohail Iqbal</h3>
            <p className="text-xs text-gray-500 ">Associate Professor</p>
            </div>
          </Link>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-end text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-dropdown"
            aria-expanded="false"
            onClick={() => setShowNavBar(!showNavBar)}
          >
            <span className="sr-only">Open main menu</span>
            <FaBars className="w-6 h-6" />
          </button>
          <div
            className={`left-0 right-0 bottom-0 translate-y-full z-30 bg-white md:w-auto  ${
              !showNavBar
                ? "h-0 hidden"
                : `overflow-hidden h-72 shadow-[0_2px_6px_0_rgba(0,0,0,0.12)] rounded-md`
            } md:h-auto absolute md:static md:translate-y-0 md:block md:w-auto`}
            id="navbar-dropdown"
          >
            <ul
              className={`flex pt-2 pl-6 space-y-4 md:items-center md:h-auto flex-col m-0 font-medium md:p-0 lg:m-0 rounded-lg md:space-x-8 md:space-y-0 lg:space-x-12 md:flex-row md:mt-0 md:border-0`}
            >
              {navLinks.map((link:LinkType) => (

                <li key={link.title}>
                  {link.title.toLowerCase()==="resume"?
                  <a href={"/assets/resume.pdf"} download={true}
                  data-test={link.dataTest}
                  className={`text-gray-500 md:hover:bg-transparent border-none text-sm hover:text-primary-500 transition-all font-[400] flex justify-start m-0`}
                  >
                    {link.title}
                  </a>:
                  <Link
                  data-test={link.dataTest}
                  href={link.link}
                  className={`text-gray-500 md:hover:bg-transparent border-none text-sm hover:text-primary-500 transition-all font-[400] flex justify-start m-0`}
                  >
                    {link.title}
                  </Link>
                  }
                </li>
              ))}

              <hr className="w-full md:hidden border-gray-900 border-opacity-5" />
              <div className="flex  md:ml-auto items-center justify-start md:justify-end  space-x-4  flex-1  ">
                <div className={` flex md:space-y-0 items-center space-x-3 `}>
                  {/* buttons */}
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
