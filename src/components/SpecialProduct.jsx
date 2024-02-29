import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const SpecialProduct = () => {
  return (
    <div className="special-card shadow-md bg-white p-[15px] rounded-[10px] w-[32.5%] ">
      <div className="flex justify-between gap-2">
        <div className=" left-col  relative flex-[1]  overflow-hidden">
          <div className="wish-icon absolute top-[3%] right-[15px]">
            <Link to="#">
              <img
                src="/src/assets/images/wish.svg"
                alt="wishlist icon"
              />
            </Link>
          </div>
          <div className="product-img  h-[270px] ">
            <img
              src="/src/assets/images/speaker.jpg"
              alt="product image"
              className="  h-[70%]  object-contain"
            />
          </div>
          <div className="action-bar absolute top-[10%]  right-[-20px]  ">
            <div className="flex flex-col gap-2">
              <Link>
                <img
                  src="/src/assets/images/prodcompare.svg"
                  alt="cart"
                />
              </Link>
              <Link>
                <img
                  src="/src/assets/images/view.svg"
                  alt="cart"
                />
              </Link>
              <Link>
                <img
                  src="/src/assets/images/add-cart.svg"
                  alt="cart"
                />
              </Link>
            </div>
          </div>
        </div>
        <div className="right-col flex-[1]">
          <div>
            <h6 className="text-orange-500 mb-2 font-[400]">Havels</h6>
            <h5 className="text-[15px] mb-2 font-medium">
              Kids Watch bulk 10 pack multi colored for students
            </h5>
            <div className="w-full h-full mb-2">
              <ReactStars
                count={5}
                value={3}
                edit={false}
                size={24}
              />
            </div>
            <p className="text-[15px]mb-2 text-orange-500 ">
              <span>$ 100</span> &nbsp;
              <strike className="text-orange-300">$200</strike>
            </p>
            <div className="discount-till flex items-center gap-2">
              <p>
                <b>5 </b>days
              </p>
              <div className="flex gap-[10px]">
                <span className="text-white w-[25px] h-[25px]  rounded-[50%] flex items-center justify-center bg-red-500 ">
                  1
                </span>
                :
                <span className="text-white w-[25px] h-[25px]  rounded-[50%] flex items-center justify-center bg-red-500 ">
                  1
                </span>
                :
                <span className="text-white w-[25px] h-[25px]  rounded-[50%] flex items-center justify-center bg-red-500 ">
                  1
                </span>
              </div>
            </div>
            <div className="product-count mt-3">
              <p>Produt:5</p>
              <div className="w-full mt-2 bg-gray-200 rounded-full">
                <div
                  className="h-2 bg-blue-500 rounded-full "
                  role="progressbar"
                  style={{ width: "25%" }}
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <Link
              to="#"
              className="py-2 px-4 mt-4 mb-2 bg-color-dgray  text-white text:sm rounded-[24px] hover:bg-slate-900 "
            >Add to Cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
