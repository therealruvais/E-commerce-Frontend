import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import banner1 from "../assets/images/main-banner-1.jpg";
import cat1 from "../assets/images/catbanner-01.jpg";
import cat2 from "../assets/images/catbanner-02.jpg";
import cat3 from "../assets/images/catbanner-03.jpg";
import cat4 from "../assets/images/catbanner-04.jpg";
import service from "../assets/images/service.png";
import service2 from "../assets/images/service-02.png";
import service3 from "../assets/images/service-03.png";
import service4 from "../assets/images/service-04.png";
import service5 from "../assets/images/service-05.png";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
  return (
    <>
      <section className="py-5 w-[100vw]   ">
        <div className=" flex  px-2  justify-center ">
          <div className=" flex items-center justify-center w-full h-full ">
            <div className="w-[600px]  relative">
              <img
                src={banner1}
                alt="main-banner"
                className="rounded-[12px] w-[600px] h-[420px] "
              />
              <div className="absolute top-[15%] left-[5%]">
                <h4 className="text-orange-500 mb-2">SUPER CHARGED FOR PROS</h4>
                <h5 className="text-4xl mt-1 mb-1 font-bold ">iPad S13+Pro</h5>
                <p className="mb-1 mt-1">from $999.0 or $41.6/mo</p>
                <Link
                  to=""
                  className="py-2 px-4 bg-color-dgray mt-1 text-white text:sm rounded-[24px] hover:bg-orange-500 hover:text-color-dgray"
                >
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-full  flex flex-wrap gap-4 items-center sm:w-full sm:h-full ">
            <div className="w-[300px] h-full relative ">
              <img
                src={cat1}
                alt="main-banner"
                className="rounded-[12px] w-[300px] h-[195px] "
              />
              <div className="absolute top-[15%] left-[5%]">
                <h4 className="text-orange-500 text-[12px] mb-2">
                  New Arrival
                </h4>
                <h5 className="text-4xl mt-1 mb-1 font-bold text-[23px] ">
                  iPad S13+Pro
                </h5>
                <p className="mb-1 mt-1 text-[12px]">
                  from $999.0 or <br /> $41.6/mo
                </p>
              </div>
            </div>
            <div className="w-[300px] h-full  relative ">
              <img
                src={cat2}
                alt="main-banner"
                className="rounded-[12px] w-[300px] h-[195px] "
              />
              <div className="absolute top-[15%] left-[5%]">
                <h4 className="text-orange-500 text-[12px] mb-2">50% Off</h4>
                <h5 className="text-4xl mt-1 mb-1 font-bold text-[23px] ">
                  iPad S13+Pro
                </h5>
                <p className="mb-1 mt-1 text-[12px]">
                  from $999.0 or <br /> $41.6/mo
                </p>
              </div>
            </div>
            <div className="w-[300px] h-full  relative ">
              <img
                src={cat3}
                alt="main-banner"
                className="rounded-[12px] w-[300px] h-[195px] "
              />
              <div className="absolute top-[15%] left-[5%]">
                <h4 className="text-orange-500 text-[12px] mb-2">SUPER</h4>
                <h5 className="text-4xl mt-1 mb-1 font-bold text-[23px] ">
                  iPad S13+Pro
                </h5>
                <p className="mb-1 mt-1 text-[12px]">
                  from $999.0 or <br /> $41.6/mo
                </p>
              </div>
            </div>
            <div className="w-[300px] h-full  relative ">
              <img
                src={cat4}
                alt="main-banner"
                className="rounded-[12px] w-[300px] h-[195px] "
              />
              <div className="absolute top-[15%] left-[5%]">
                <h4 className="text-orange-500 text-[12px] mb-2">Best sale</h4>
                <h5 className="text-4xl mt-1 mb-1 font-bold text-[23px] ">
                  iPad S13+Pro
                </h5>
                <p className="mb-1 mt-1 text-[12px]">
                  from $999.0 or <br /> $41.6/mo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="service  bg-[#f5f5f7] py-5 w-[100vw] ">
        <div className=" px-8 py-8  bg-[#f5f5f7]">
          <div className=" flex items-center justify-around  ">
            <div className="flex items-center gap-4">
              <img
                src={service}
                alt="services"
              />
              <div>
                <h6 className="text-[20px] font-medium">free shipping</h6>
                <p className="text-sm">from all orders over 100$</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={service2}
                alt="services"
              />
              <div>
                <h6 className="text-[20px] font-medium ">
                  Daily Surprice offers{" "}
                </h6>
                <p className="text-sm">Save up to 25%</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={service3}
                alt="services"
              />
              <div>
                <h6 className="text-[20px] font-medium">Support 24/7</h6>
                <p className="text-sm">shop with an expert</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={service4}
                alt="services"
              />
              <div>
                <h6 className="text-[20px] font-medium">Affordable Prices</h6>
                <p className="text-sm">get factory direct price.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img
                src={service5}
                alt="services"
              />
              <div>
                <h6 className="text-[20px] font-medium">Secure Payments</h6>
                <p className="text-sm">100% protected payments</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-5 bg-[#f5f5f7]  w-[100vw]">
        <div className="py-3 px-8  shadow-sm flex items-center justify-start gap-6 flex-wrap  ">
          <div className="p-2 flex bg-white items-center justify-center  border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">camera</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/camera.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Tv</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/tv.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Headphones</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/headphone.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Laptops</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/laptop.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Laptops</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/laptop.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center  border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">camera</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/camera.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Tv</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/tv.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Headphones</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/headphone.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Laptops</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/laptop.jpg"
              alt="camera"
            />
          </div>
          <div className="p-2 flex bg-white items-center justify-center border shadow-sm">
            <div className="w-[110px]">
              <h6 className="font-medium ">Laptops</h6>
              <p>10 Items</p>
            </div>
            <img
              src="/src/assets/images/laptop.jpg"
              alt="camera"
            />
          </div>
        </div>
      </section>
      <section className="featured bg-[#f5f5f7] py-5 w-[100vw]">
        <div className="px-8 mb-8 w-full">
          <h3 className="font-medium text-[26px] leading-4 ">
            Featured Collection{" "}
          </h3>
        </div>
        <div className="px-8 flex justify-between gap-4 w-full h-full">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>
      <section className="famous bg-[#f5f5f7] py-5 w-[100vw]">
        <div className="px-8 w-full h-full">
          <div className="flex gap-4 justify-between">
            <div className="w-1/4 bg-white relative ">
              <img
                src="/src/assets/images/tab.jpg"
                alt="focus"
              />
              <div className="famous-content absolute top-0">
                <p>
                  <b>Big tablet</b>
                </p>
                <p className="text-[24px] font-[500]">
                  kids and for proffesionals
                </p>
                <p className="text-sm">from $20/mo for 12 mo or $200</p>
              </div>
            </div>
            <div className="w-1/4 bg-white relative ">
              <img
                src="/src/assets/images/tab.jpg"
                alt="focus"
              />
              <div className="famous-content absolute top-0">
                <p>
                  <b>Big tablet</b>
                </p>
                <p className="text-[24px] font-[500]">
                  kids and for proffesionals
                </p>
                <p className="text-sm">from $20/mo for 12 mo or $200</p>
              </div>
            </div>
            <div className="w-1/4 bg-white relative ">
              <img
                src="/src/assets/images/tab.jpg"
                alt="focus"
              />
              <div className="famous-content absolute top-0">
                <p>
                  <b>Big tablet</b>
                </p>
                <p className="text-[24px] font-[500]">
                  kids and for proffesionals
                </p>
                <p className="text-sm">from $20/mo for 12 mo or $200</p>
              </div>
            </div>
            <div className="w-1/4 bg-white relative ">
              <img
                src="/src/assets/images/tab.jpg"
                alt="focus"
              />
              <div className="famous-content absolute top-0">
                <p>
                  <b>Big tablet</b>
                </p>
                <p className="text-[24px] font-[500]">
                  kids and for proffesionals
                </p>
                <p className="text-sm">from $20/mo for 12 mo or $200</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="special bg-[#f5f5f7] py-5 w-[100vw]">
        <div className="px-8 w-full ">
          <h3 className="font-medium text-[26px] leading-4 mb-8 ">
            Special Products{" "}
          </h3>
          <div className=" flex flex-wrap justify-start gap-4 w-full h-full">
            <SpecialProduct />
            <SpecialProduct />
            <SpecialProduct />
          </div>
        </div>
      </section>
      <section className="popular bg-[#f5f5f7] py-5 w-[100vw]">
        <div className="px-8 mb-8 w-full">
          <h3 className="font-medium text-[26px] leading-4 ">
            Our Popular Products
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
      <section className="marquee bg-[#f5f5f7] py-5 px-8 w-[100vw]">
        <div className=" bg-white w-full shadow-md ">
          <Marquee className="flex">
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-01.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-02.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-03.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-04.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-05.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-06.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-07.png"
                alt="brand"
              />
            </div>
            <div className="mx-4 w-[50%]">
              <img
                src="/src/assets/images/brand-08.png"
                alt="brand"
              />
            </div>
          </Marquee>
        </div>
      </section>
      <section className="blog bg-[#f5f5f7] py-5 w-[100vw]">
        <div className="px-8 mb-8 w-full">
          <h3 className="font-medium text-[26px] leading-4 ">
            Our Latest Blogs{" "}
          </h3>
        </div>
        <div className="px-8 flex justify-between gap-4 w-full h-full">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Home;
