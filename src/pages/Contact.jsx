import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { FaHome, FaInfo } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <>
      <BreadCrumb title={"Contact Us"} />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62865.54195910479!2d76.30948068762464!3d10.00889799201628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080c8e94a07a07%3A0x49921cdfae82660!2sKakkanad%2C%20Kerala!5e0!3m2!1sen!2sin!4v1707873689280!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="py-5">
            <div className="contact-wrapper flex gap-2   ">
              <div className="flex-[1] bg-white rounded-[15px] p-4">
                <h3 className="font-medium text-2xl ">Contact</h3>
                <div className="mt-2">
                  <form>
                    <input
                      type="text"
                      placeholder="Name"
                      name="name"
                      className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 focus:outline-color-yellow outline-[0.5px]"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 focus:outline-color-yellow outline-[0.5px]"
                    />
                    <input
                      type="text"
                      placeholder="Phone"
                      name="phone"
                      className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 focus:outline-color-yellow outline-[0.5px]"
                    />
                    <textarea
                      name="comment"
                      id=""
                      placeholder="Comment"
                      cols="10"
                      rows="5"
                      className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 focus:outline-color-yellow outline-[0.5px]"
                    ></textarea>
                    <button className="py-2 px-4 mt-2 mb-2 bg-color-dgray  text-white text:sm rounded-[15px] hover:bg-slate-900  font-medium ">
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="flex-[1] bg-white rounded-[15px] p-4">
                <h3 className="font-medium text-2xl ">Get in Touch With Us</h3>
                <div className="mt-4">
                  <ul>
                    <li className="text-color-gray mb-4 flex gap-2 items-center">
                      <FaHome /> 
                      <address>Hno:233, hdninfid, lnfo</address>
                    </li>
                    <li className="text-color-gray mb-4 flex gap-2 items-center">
                      <FaPhone /> 
                      <a href="tel:+91 702768216">+91-7012768216</a>
                    </li>
                    <li className="text-color-gray mb-4 flex gap-2 items-center">
                      <MdAlternateEmail /> 
                      <a href="mailto:ruvais837@gmail.com">ruvais666@gmail.com</a>
                    </li>
                    <li className="text-color-gray mb-4 flex gap-2 items-center">
                      <FaInfo /> 
                        <p>Monday-Friday 10AM to 8PM</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
