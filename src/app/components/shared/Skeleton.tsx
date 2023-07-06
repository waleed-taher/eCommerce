import React from "react";

const Skeleton = () => {
  return (
    <>
      <div className="grid grid-cols-3 cursor-pointer ml-52 gap-x-4 gap-y-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:ml-0">
        {/* Skeleton screen */}
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="max-h-[300px] mb-44 animate-pulse">
            <div className="bg-gray-200 h-[300px] w-full my-4"></div>
            <h1 className="bg-gray-200 h-[60px] w-[70%] my-4"></h1>
            <p className="bg-gray-200 h-[20px] w-[40%]"></p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Skeleton;
