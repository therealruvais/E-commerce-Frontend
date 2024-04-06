import React from "react";
import { NavLink, Link } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import compare from '../assets/images/compare.svg'
import wishlist from '../assets/images/wishlist.svg'
import user from '../assets/images/user.svg'
import cart from '../assets/images/cart.svg'
import Dropdown from "./dropdown/DropDown";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-1 px-4">
        <div className="">
          <div className="flex flex-row justify-between m-1">
            <div>
              <p className="text-white ml-6 ">
                Free Shipping Over $100 & Free Returns
              </p>
            </div>
            <div>
              <p className="text-end text-white mr-9 ">
                Hotline:{" "}
                <a
                  className="text-white"
                  href="tel:+91 7012768216"
                >
                  +91-7012768216
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
      <header className=" header-upper py-3 px-3">
        <div className="ml-8">
          <div className="flex flex-row items-center ">
            <div className="self-center">
              <h2>
                <Link className="text-white text-3xl">Shoppy.dev</Link>
              </h2>
            </div>
            <div className=" mx-3">
              <div className="flex items-center   rounded-sm bg-white">
                <input
                  type="text"
                  className="px-3 outline-none border-none w-[400px]"
                  placeholder="Search product here"
                  aria-label="Search product here"
                  aria-describedby="basic-addon2"
                />
                <div
                  className=" flex items-center justify-center rounded-sm w-10 h-[30px] input-group-text"
                  id="basic-addon2"
                >
                  <BsSearch />
                </div>
              </div>
            </div>

            <div className="header-upper w-full h-full flex items-center gap-3 text-white justify-end mr-8">
              <div>
                <Link to='/compare' className="flex flex-row gap-2 items-center">
                  <img
                    src={compare}
                    alt="compare"
                  />
                  <p className="text-sm">
                    Compare
                    <br />
                    Products
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/wishlist' className="flex flex-row gap-2 items-center">
                  <img
                    src={wishlist}
                    alt="wishlist"
                  />
                  <p className="text-sm">
                    Favourite <br /> Wishlist
                  </p>
                </Link>
              </div>
              <div>
                <Link to='/login' className="flex flex-row gap-2 items-center">
                  <img
                    src={user}
                    alt=""
                  />
                  <p className="text-sm">
                    Login <br /> My Account
                  </p>
                </Link>
              </div>
              <div className="relative">
                <Link to='cart' className="flex flex-row   items-center gap-2">
                  <img
                    src={cart}
                    alt=""
                  />
                  <div className=" text:sm w-full">
                    <span className="">0</span>
                    <p className="bg-[#febd69] text-black rounded-md font-semibold">
                      $500
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header className="header-bottom py-1   ">
        <div className="w-full h-full text-white">
          <div className="flex ">
            <div className="menu  flex items-center justify-center flex-[1] header-border-r  ">
              <div>
                <Dropdown />
              </div>
            </div>
            <div className="menulinks flex flex-[3] text-xl ml-8 uppercase  gap-11">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/store">Our Store</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
