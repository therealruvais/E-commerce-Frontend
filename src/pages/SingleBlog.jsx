import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import { Link } from "react-router-dom";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const SingleBlog = () => {
  return (
    <>
      <BreadCrumb title="Single Blog" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-[20%] gap-4 ">
              <div className="categories bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className="text-[#1c1c1b]  text-[16px] mb-5 font-medium">
                  Shop By Categories
                </h3>
                <div className="list">
                  <ul className="text-[#777777b2]">
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[80%]">
              <div className="sblocg-container flex flex-col gap-4 w-full h-[50%]">
                <h3 className="font-medium text-[28px] leading-4">
                  A Beautiful Sunday Morning Renaissence
                </h3>
                <img
                  src="/src/assets/images/blog-1.jpg"
                  alt="blog"
                  className="w-full h-full"
                />
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aut
                  quo nemo facilis aperiam aliquam? Voluptate obcaecati fugiat
                  fuga optio est, nobis explicabo voluptas cupiditate,
                  aspernatur mollitia laboriosam, quibusdam rerum expedita.
                </p>
                <p className="mt-4 text-[14px] text-gray-500">
                  11 Mar,2024 &nbsp; Kerala
                </p>
                <div className="mt-5 flex justify-between">
                  <Link
                    to="/blogs"
                    className="font-medium text-[18px] leading-4 text-gray-500"
                  >
                    <a
                      href="#"
                      className="text-[24px]  text-gray-500"
                    >
                      ←
                    </a>{" "}
                    Back to blog
                  </Link>
                  <div className="flex gap-4">
                    <Link to='' className="text-[18px]"><FaFacebook/></Link>
                    <Link to='' className="text-[18px]"><FaXTwitter/></Link>
                    <Link to='' className="text-[18px]"><FaYoutube /></Link>
                  </div>
                </div>

                <div className="w-full h-full mt-10">
                  <div className="w-full h-full bg-white flex flex-col gap-4 p-4 ">
                    <h3 className="font-medium text-[28px] ">
                      Leave A Comment
                    </h3>
                    <div>
                      <form className="flex flex-col gap-4">
                        <input
                          type="text"
                          name="name"
                          className="w-full py-4 outline-none bg-[#f5f5f7] text-[18px] rounded-sm"
                          placeholder="Name"
                        />
                        <input
                          type="text"
                          name="comment"
                          className="w-full py-4 outline-none bg-[#f5f5f7] text-[18px] rounded-sm"
                          placeholder="Comment"
                        />
                        <input
                          type="button"
                          value="Submit"
                          className="py-2 px-4 mt-2 mb-2 bg-color-dgray w-[10%]  text-white text:sm rounded-[24px] hover:bg-slate-900 "
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
