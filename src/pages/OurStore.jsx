import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard'
import Color from "../components/Color";

const OurStore = () => {
  const [grid, setGrid] = useState(3)
  console.log(grid)

  return (
    <>
      <BreadCrumb title="Our Store" />
      <div className="store py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex gap-4">
            <div className="flex flex-col w-[20%] gap-4 ">
              <div className="categories bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className="text-[#1c1c1b]  text-[16px] mb-5 font-medium">
                  Shop By Categories
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
              <div className="filter-by bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className=" text-[#1c1c1b] mb-4 text-[16px] font-medium">
                  Filter By
                </h3>
                <div className="filter-items">
                  <h5 className="text-[14px] font-[600] mb-4">Availabilty</h5>
                  <div>
                    <div className="checkbox text-[13px] mb-2 text-[#777777b2] ">
                      <input
                        type="checkbox"
                        name=""
                        value=""
                        id=""
                        className="checkbox-input mr-2 accent-[#f5970b] "
                      />
                      <label htmlFor="">In Stock (1)</label>
                    </div>
                    <div className="checkbox text-[13px] text-[#777777b2]">
                      <input
                        type="checkbox"
                        name=""
                        value=""
                        id=""
                        className="checkbox-input mr-2 accent-[#f5970b] "
                        checked
                      />
                      <label htmlFor="">Out of Stock (0)</label>
                    </div>
                  </div>
                  <h5 className="text-[14px] font-[600] mt-4 mb-2">Price</h5>
                  <div className="price flex gap-3">
                    <div className="form__group field">
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        required=""
                      />

                      <label
                        htmlFor="name"
                        className="form__label"
                      >
                        $: from
                      </label>
                    </div>
                    <div className="form__group field">
                      <input
                        type="input"
                        className="form__field"
                        placeholder="Name"
                        required=""
                      />
                      <label
                        htmlFor="name"
                        className="form__label"
                      >
                        $: to
                      </label>
                    </div>
                  </div>
                  <h5 className=" text-[14px] font-[600] mt-4 mb-2">Colors</h5>
                  <div className="colors">
                    <div>
                     <Color />
                    </div>
                  </div>
                  <h5 className="text-[14px] font-[600] mt-4 mb-2">Size</h5>
                  <div className="size">
                    <div className="checkbox text-[13px] mb-2 text-[#777777b2] ">
                      <input
                        type="checkbox"
                        name=""
                        value=""
                        id="color-1"
                        className="checkbox-input mr-2 accent-[#f5970b] "
                      />
                      <label htmlFor="color-1">S (2)</label>
                    </div>
                    <div className="checkbox text-[13px] mb-2 text-[#777777b2] ">
                      <input
                        type="checkbox"
                        name=""
                        value=""
                        id="color-2"
                        className="checkbox-input mr-2 accent-[#f5970b] "
                      />
                      <label htmlFor="color-2">M (2)</label>
                    </div>
                    <div className="checkbox text-[13px] mb-2 text-[#777777b2] ">
                      <input
                        type="checkbox"
                        name=""
                        value=""
                        id="color-3"
                        className="checkbox-input mr-2 accent-[#f5970b] "
                      />
                      <label htmlFor="color-3">L (2)</label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product-tag bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className="text-[#1c1c1b] mb-4 text-[16px] font-medium">
                  Product Tags
                </h3>
                <div className="p-tag">
                  <div className="flex flex-wrap gap-[10px] ">
                    <span className="bg-[#9999] px-3 py-3 text-sm rounded-[10px]">
                      Headpphone
                    </span>
                    <span className="bg-[#9999] px-3 py-3 text-sm rounded-[10px]">
                      Laptop
                    </span>
                    <span className="bg-[#9999] px-3 py-3 text-sm rounded-[10px]">
                      Tv
                    </span>
                    <span className="bg-[#9999] px-3 py-3 text-sm rounded-[10px]">
                      Camera
                    </span>
                    <span className="bg-[#9999] px-3 py-3 text-sm rounded-[10px]">
                      Mobiles
                    </span>
                  </div>
                </div>
              </div>
              <div className="random-product bg-white px-2 py-2 rounded-[10px]  ">
                <h3 className="text-[#1c1c1b] mb-4 text-[16px] font-medium">
                  Random Products
                </h3>
                <div className="random-p ">
                  <div className="flex gap-1 border-b">
                    <div className="w-[30%] h-100[vh]  ">
                      <img
                        src="/src/assets/images/headphone.jpg"
                        alt="random product"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-[70%]">
                      <div>
                        <h5 className="text-[12px] mb-[2px] font-medium">
                          Kids Headphones bulk 10 pack multi colored for
                          students
                        </h5>
                        <div className="w-full h-full mb-[2px]">
                          <ReactStars
                            count={5}
                            value={3}
                            edit={false}
                            size={15}
                          />
                        </div>
                        <p className="text-[12px] text-orange-500 ">$ 100</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1 mt-1">
                    <div className="w-[30%] h-100[vh]  ">
                      <img
                        src="/src/assets/images/watch-1.webp"
                        alt="random product"
                        className=" w-full h-full object-contain"
                      />
                    </div>
                    <div className="w-[70%]">
                      <div>
                        <h5 className="text-[12px] mb-[2px] font-medium">
                          Kids Watch bulk 10 pack multi colored for students
                        </h5>
                        <div className="w-full h-full mb-[2px]">
                          <ReactStars
                            count={5}
                            value={3}
                            edit={false}
                            size={15}
                          />
                        </div>
                        <p className="text-[12px] text-orange-500 ">$ 100</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[80%]  ">
              <div className="w-full h-full flex flex-col gap-4 ">
                <div className="bg-white  px-2 py-2 rounded-[10px] flex items-center justify-between ">
                  <div className="flex items-center gap-1">
                    <p>Sort By :</p>
                    <select
                      name=""
                      className="selecting-menu border-2 text-center  rounded-sm outline-none "
                      id=""
                      // value="best-selling"
                    >
                      <option value="manual">Features</option>
                      <option value="best-selling">Best Selling</option>
                      <option value="title-ascending">
                        Alphabetically A-Z
                      </option>
                      <option value="title-descending">
                        Alphabetically Z-A
                      </option>
                      <option value="price-ascending">Price low to high</option>
                      <option value="price-descending">
                        Price high to low
                      </option>
                      <option value="date-ascending">Date old to new</option>
                      <option value="date-descending">Date new to old</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-center mr-1   gap-3">
                    <div className="total-pro w-full">
                      <p className="text-sm text-[#9999]">21 Products</p>
                    </div>
                    <div className="flex items-center justify-center  w-full gap-3">
                      <img
                        src="/src/assets/images/gr4.svg"
                        alt="grid"
                        className=" w-[26px]  h-[26px] p-[5px] rounded-md hover:bg-[#e5e5e5] cursor-pointer "
                        onClick={() => setGrid(3)}
                      />
                      <img
                        src="/src/assets/images/gr3.svg"
                        alt="grid"
                        className=" w-[26px]  h-[26px] p-[5px] rounded-md hover:bg-[#e5e5e5] cursor-pointer "
                        onClick={() => setGrid(4)}
                      />
                      <img
                        src="/src/assets/images/gr2.svg"
                        alt="grid"
                        className=" w-[26px]  h-[26px] p-[5px] rounded-md hover:bg-[#e5e5e5] cursor-pointer  "
                        onClick={() => setGrid(6)}
                      />
                      <img
                        src="/src/assets/images/gr.svg"
                        alt="grid"
                        className="  w-[26px]  h-[26px] p-[5px] rounded-md hover:bg-[#e5e5e5] cursor-pointer  "
                        onClick={() => setGrid(12)}
                      />
                    </div>
                  </div>
                </div>
                <div className="product-list w-full h-full bg-white  px-2 py-2 rounded-[10px]">
                  <div className="p-cards  flex flex-wrap gap-1">
                    <ProductCard grid={grid} />
                    <ProductCard grid={grid} />
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

export default OurStore;
