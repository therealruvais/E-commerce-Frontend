import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

const ProductCard = ({ grid }) => {
  let location = useLocation();

  return (
    <div
      className={`${location.pathname == "/store" ? `gr-${grid}` : "w-1/4"}`}
    >
      <Link to="/product/:id">
        <div className="product-card shadow-md bg-white p-[15px] rounded-[10px] relative overflow-hidden  ">
          <div className="wish-icon absolute top-[3%] right-[15px]">
            <Link to="#">
              <img
                src="/src/assets/images/wish.svg"
                alt="wishlist icon"
              />
            </Link>
          </div>
          <div className="product-img  ">
            <img
              src="/src/assets/images/watch.jpg"
              alt="product image"
              className="  h-[270px]  object-contain"
            />
            <img
              src="/src/assets/images/watch-1.webp"
              alt="product image"
              className="  h-[270px]  object-contain"
            />
          </div>

          <div className="product-details h-full">
            <h6 className="text-orange-500 mb-2 font-[400]">Havels</h6>
            <h5 className="text-[15px] mb-2 font-medium">
              Kids Watch bulk 10 pack multi colored for students
            </h5>

            <ReactStars
              count={5}
              value={3}
              edit={false}
              size={24}
            />

            <p className={`description ${grid === 12 ? "block" : "hidden"}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              impedit sit iure dolores saepe eum corporis aut nobis quasi, iste,
              cumque porro eius beatae consequuntur ex accusamus id rem.
              Possimus
            </p>

            <p className="text-[15px] mb-2 text-orange-500 ">$ 100</p>
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
      </Link>
    </div>
  );
};

export default ProductCard;
