import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";

const SingleProduct = () => {
  const [orderdProduct, setOrderedProduct] = useState(true);
  return (
    <>
      <BreadCrumb title="Single Product" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex bg-white">
            <div className="productImg flex-[1]">hi</div>
            <div className="productDetails flex-[1]"> hi</div>
          </div>
        </div>
        <div className="description px-8 mt-4">
          <h4 className="font-medium text-[24px] leading-4 mb-4 ">
            Description
          </h4>
          <div className="bg-white p-3 rounded-[10px]">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur, nobis! Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Laudantium, maiores magni eum maxime facilis
              consectetur accusantium enim ratione labore vero.
            </p>
          </div>
        </div>
        <section className="reviews bg-[#f5f5f7] py-5 w-[100vw]">
          <div className="px-8 mb-8 w-full flex flex-col gap-4">
            <h3 className="font-medium text-[26px] leading-4 ">Reviews</h3>
            <div className="bg-white rounded-[10px] p-[30px]  ">
              <div className="border-b border-black flex justify-between items-center">
                <div>
                  <h5 className="font-medium text-[18px] leading-4 mb-2">
                    Customer Reviews
                  </h5>
                  <div className="flex gap-3 items-center">
                    <ReactStars
                      count={5}
                      value={3}
                      edit={false}
                      size={20}
                    />
                    <p className="text-[14px] text-[#9999]">
                      Based on 3 reviews
                    </p>
                  </div>
                </div>
                <div>
                  {orderdProduct && (
                    <button className="underline">Write a Review</button>
                  )}
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-[24px] leading-4 text-[#7777]">
                  Write A Review
                </h3>
                <form>
                  <h4 className="font-medium text-[18px] leading-4 text-[#7777] mt-4 mb-2">
                    Rating
                  </h4>
                  <ReactStars
                    count={5}
                    value={0}
                    edit={true}
                    size={20}
                  />
                  <textarea
                    name="comment"
                    id=""
                    placeholder="Comment"
                    cols="10"
                    rows="5"
                    className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 focus:outline-color-yellow outline-[0.5px]"
                  ></textarea>
                  <div className="flex justify-end">
                    <button className="py-2 px-4 mt-2 mb-2 bg-color-dgray  text-white text:sm rounded-[15px] hover:bg-slate-900  font-medium ">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section className="popular bg-[#f5f5f7] py-5 w-[100vw]">
          <div className="px-8 mb-8 w-full">
            <h3 className="font-medium text-[26px] leading-4 ">
              Products You May Like
            </h3>
          </div>
          <div className="px-8 flex justify-between gap-4 w-full h-full">
            <div className="popular-cards  shadow-md bg-white p-[15px] rounded-[10px] w-[30%]">
              hi
            </div>
            <div className="popular-cards  shadow-md bg-white p-[15px] rounded-[10px] w-[30%]">
              hi
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />     
          </div>
        </section>
      </div>
    </>
  );
};

export default SingleProduct;
