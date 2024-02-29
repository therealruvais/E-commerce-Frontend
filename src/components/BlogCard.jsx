import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    <div className="bg-white rounded-[10px] w-[49.2%]">
      <div className="card-image">
        <img
          src="/src/assets/images/blog-1.jpg"
          alt="blog"
          className="rounded-t-md w-full"
        />
      </div>
      <div>
        <p className="date text-[13px] mt-2 font-[400] text-[#999999d8]">
          30 Jan, 2024
        </p>
        <h5 className="heading text-[16px] mt-2 font-medium">
          A beautiful sunday morning renaissance
        </h5>
        <p className="desc mt-2 text-[#77777] text-[13px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
        </p>
        <Link
          to="#"
          className="py-2 px-4 mt-2 mb-2 bg-color-dgray  text-white text:sm rounded-[24px] hover:bg-slate-900 "
        >
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
