import React from "react";
import BreadCrumb from "../components/BreadCrumb";

const Wishlist = () => {
  return (
    <>
      <BreadCrumb title="Favourite Wishlist" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="w-full h-full flex items-center gap-4">
            <div className="compareCard p-5 bg-white w-1/4 rounded-[10px] relative ">
              <img
                src="/src/assets/images/cross.svg"
                alt="cross"
                className="absolute w-[20px]  top-3 right-3 cursor-pointer "
              />
              <div className="compare-img h-[200px] ">
                <img
                  src="/src/assets/images/watch-1.webp"
                  alt="watch"
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="compare-details mt-4 ">
                <h5 className="title text-[15px] leading-5 mb-2 font-medium">
                  Noise Fit Buzz with 1.32inch HD Round Screen Smartwatch
                </h5>
                <h6 className="price text-[15px] text-orange-500 leading-6 mt-2 mb-2 font-medium">
                  $ 100.00
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
