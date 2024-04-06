import React from "react";
import newsletter from "../assets/images/newsletter.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="py-[2.5rem] bg-color-dgray flex items-center justify-around  ">
        <div className="flex items-center gap-3  ">
          <img
            src={newsletter}
            alt="newsletter"
            className="w-[30px] h-[30px]"
          />
          <h1 className="text-white text-xl font-semibold">
            Sign Up For News Letter
          </h1>
        </div>
        <div className="bg-white  flex items-center justify-around rounded-md py-1 px-1">
          <input
            type="email"
            placeholder="enter your email"
            className="outline-none w-[30rem] focus:outline-none placeholder:text-gray-700"
          />
          <button className="text-sm py-1 px-1 font-medium rounded-md bg-color-dgray text-white">
            SUBSCRIBE
          </button>
        </div>
      </footer>
      <footer className="py-3  bg-color-dgray border-t border-[#9999] ">
        <div className="flex items-center justify-around ">
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl text-white font-md">Contact Us</h3>
            <div className="flex flex-col gap-2  text-white text-sm ">
              <address to="#">
                Demo Store
                <br />
                No. 1259 Palakkad,Kerala,111 <br /> India
              </address>
              <a href="tel:+91 7012768218">+91-7012768216</a>
              <a href="mailto:ruvais666@gmail.com" target="_blank">ruvais666@gmail.com</a>
              {/* <Link to='#'></Link> */}
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl text-white font-md">Information</h3>
            <div className="flex flex-col gap-2 text-white text-sm ">
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/refund-policy">Refund Policy</Link>
              <Link to="/shipping-policy">Shipping Policy</Link>
              <Link to="/terms-conditions">Terms & Conditions</Link>
              <Link to="/blogs">Blogs</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-xl text-white font-md">Acount</h3>
            <div className="flex flex-col gap-2 text-white text-sm ">
              <Link to="#">Search</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/about">About Us</Link>
              <Link to="#">Size Chart</Link>
              <Link to="#">Faq</Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 items-center ">
            <h3 className="text-xl text-white font-md">Quick Links</h3>
            <div className="flex flex-col gap-2  text-white text-sm">
              <Link to="#">Accessories</Link>
              <Link to="#">Laptops</Link>
              <Link to="#">Headphones</Link>
              <Link to="#">Smart Watches</Link>
              <Link to="#">Tablet</Link>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3  bg-color-dgray text-white border-t border-[#9999] ">
        <div className="flex justify-center items-center">
          <p>&copy; {new Date().getFullYear()}; powered by Shoppy.Dev</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
