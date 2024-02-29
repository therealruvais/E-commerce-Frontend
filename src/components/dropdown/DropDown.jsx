import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import shopMenu from '../../assets/images/menu.svg'
import { Link } from "react-router-dom";


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative z-10 inline-block text-left">
      <div
        onClick={toggleDropdown}
        className="flex items-center  bg-transparent rounded-sm cursor-pointer px-2 gap-2"
      >
        <img
          src={shopMenu}
          alt="menu"
        />
        <h3 className="text-xl uppercase">shop Categories</h3>
        <button
          type="button"
          className="inline-flex justify-cente  border-gray-300    font-medium text-white focus:outline-none  "
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {isOpen ? (
            <IoMdArrowDropup className="w-[20px] h-[20px]" />
          ) : (
            <IoMdArrowDropdown className="w-[20px] h-[20px]" />
          )}
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-[10px] w-56 rounded-md shadow-lg bg-color-black  ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <Link
              to="#"
              className="block px-4 py-2  text-md text-white hover:bg-gray-700"
              role="menuitem"
            >
              Action 1
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-md text-white hover:bg-gray-700"
              role="menuitem"
            >
              Action 2
            </Link>
            <Link
              to="#"
              className="block px-4 py-2 text-md text-white hover:bg-gray-700"
              role="menuitem"
            >
              Action 3
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
