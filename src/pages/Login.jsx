import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <BreadCrumb title="Login" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex justify-center ">
            <div className="p-5 bg-white w-1/3 rounded-[10px]  border-[2px] border-gray-500  ">
              <center>
                <h1 className="text-[24px] font-bold ">Login</h1>{" "}
              </center>
              <form className="w-full">
                <div className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 ">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className=" w-full bg-transparent outline-none"
                  />
                </div>
                <div className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 flex items-center">
                  <input
                    type={visible ? "text" : "password"}
                    placeholder="password"
                    name="password"
                    className="w-full bg-transparent outline-none"
                  />
                  {visible ? (
                    <FaEye
                      className="cursor-pointer"
                      onClick={() => setVisible(false)}
                    />
                  ) : (
                    <FaEyeSlash
                      className="cursor-pointer"
                      onClick={() => setVisible(true)}
                    />
                  )}
                </div>
                <div className="p-2 mt-2 mb-2">
                  <Link
                    to="/forgot-password"
                    className="text-blue-600 pl-2"
                  >
                    Forgot password?
                  </Link>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="py-2 px-4 mt-2 mb-2 bg-color-dgray w-full  text-white text:sm rounded-[15px] hover:bg-slate-900  font-medium "
                  >
                    Submit
                  </button>
                </div>
                <div className="w-full}">
                  <h4>Don't have an account?</h4>
                  <Link
                    to="/signup"
                    className="text-blue-600 pl-2"
                  >
                    Sign up
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
