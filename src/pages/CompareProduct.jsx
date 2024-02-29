import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
      <BreadCrumb title="Compare Products" />
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
                  Noise Fit Buzz with 1.32inch HD Round Screen Smartwatch (Black
                  Strap, Regular)
                </h5>
                <h6 className="price text-[15px] leading-6 mt-2 mb-2 font-medium">
                  $ 100.00
                </h6>
                <div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Brand :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Type :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Availability :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Size :
                    </h5>
                    <div className="flex gap-3">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Color :
                    </h5>
                    <Color />
                  </div>
                </div>
              </div>
            </div>
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
                  Noise Fit Buzz with 1.32inch HD Round Screen Smartwatch (Black
                  Strap, Regular)
                </h5>
                <h6 className="price text-[15px] leading-6 mt-2 mb-2 font-medium">
                  $ 100.00
                </h6>
                <div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Brand :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Type :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Availability :
                    </h5>
                    <p>Havels</p>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Size :
                    </h5>
                    <div className="flex gap-3">
                      <p>S</p>
                      <p>M</p>
                    </div>
                  </div>
                  <div className="product-detail flex justify-between items-center py-[10px]  border-t ">
                    <h5 className="text-[15px] leading-5 mb-2 font-medium">
                      Color :
                    </h5>
                    <Color />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompareProduct