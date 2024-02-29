import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import BlogCard from "../components/BlogCard";

const Blog = () => {
  return (
    <>
      <BreadCrumb title="Blogs" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-[20%] gap-4 ">
              <div className="categories bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className="text-[#1c1c1b]  text-[16px] mb-5 font-medium">
                  Find By Categories
                </h3>
                <div className="list">
                  <ul className="text-[#777777b2]">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Laptops</li>
                    <li>Mobiles</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-[80%]">
              <div className="b-cards  flex  flex-wrap gap-4 ">
                <BlogCard />
                <BlogCard />
                <BlogCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
