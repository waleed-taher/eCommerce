"use client";
import React from "react";
import Wrapper from "@/app/components/shared/Wrapper";

const NewsLetter = () => {
  const handleClick = () => {};
  return (
    <section className="mx-10">
      <Wrapper>
        {/* <div><h1 className='flex flex-col items-center justify-between gap-6 my-40 font-black text-8xl opacity-10'>Newsletter</h1></div> */}
        <div className="flex flex-col items-center justify-between gap-6 my-20 ">
          <h1 className="items-center text-4xl font-bold">
            Subscribe Our Newsletter
          </h1>
          <p className="items-center">
            Get the latest information and promo offers directly
          </p>

          <div className="flex flex-row items-center justify-between gap-3 ">
            <input
              placeholder="write your email address..."
              className="px-10 py-2 text-left border-2 border-black rounded-md shadow-md "
              type="text"
            />
            <button
              onClick={handleClick}
              className="px-5 py-2  font-semibold text-black bg-[#ffece3] shadow-md rounded-md cursor-pointer hover:bg-[#191919] hover:text-white border-2 border-black  "
            >
              Submit
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NewsLetter;
