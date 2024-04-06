import React from 'react'
import BreadCrumb from '../components/BreadCrumb';

const ForgotPassword = () => {
  return (
    <>
      <BreadCrumb title="Forgot Password" />
      <div className=" py-5 bg-[#f5f5f7]">
        <div className="px-8">
          <div className="flex justify-center ">
            <div className="p-5 bg-white w-1/3 rounded-[10px]  border-[2px] border-gray-500  ">
              <center>
                <h1 className="text-[24px] font-bold ">Forgot Password</h1>{" "}
              </center>
              <form className="w-full">
                <div className="bg-[#f5f5f7] w-full rounded-md p-2 mt-2 mb-2 ">
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    className=" w-full bg-transparent outline-none"
                  />
                </div>

                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="py-2 px-4 mt-2 mb-2 bg-color-dgray w-1/2  text-white text:sm rounded-[15px] hover:bg-slate-900  font-medium "
                  >
                    Submit
                  </button>
                </div>
                <div className="w-full flex justify-center">
                  <button
                    type="submit"
                    className="py-2 px-4 mt-2 mb-2 bg-color-dgray w-1/2  text-white text:sm rounded-[15px] hover:bg-slate-900  font-medium "
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword