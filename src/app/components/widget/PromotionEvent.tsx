import React from "react";
// import EventCard from "./EventCard";
import event1 from "@/app/assets/event1.webp";
import event2 from "@/app/assets/event2.webp";
import event3 from "@/app/assets/event3.webp";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";

const PromotionEvent = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center mb-8 gap-y-2">
          <h2 className="text-xl font-semibold text-blue-500 ">Promotions</h2>
          <h1 className="text-4xl font-bold">Our Promotions Event</h1>
        </div>
        {/* add flex fnctiuonality to it */}
        <div className="flex w-full space-x-4 max-lg:flex-col max-lg:items-center max-lg:gap-y-4 ">
          <div className="flex flex-col w-full gap-y-4 ">
            <div className="flex items-center justify-between  bg-[rgb(214,214,216)] rounded-md ml-52 max-lg:ml-0 max-lg:w-full ">
              <div className="flex flex-col px-8">
                <h1 className="mb-2 text-4xl font-bold">
                  Get Up To <span className="text-5xl">60%</span>
                </h1>
                <h4 className="text-xl font-light ">For the summer seaon</h4>
              </div>
              <div>
                <Image src={event1} alt="promotionBanner" />
              </div>
            </div>
            <div className="  bg-[#212121] rounded-md ml-52 max-lg:ml-0 max-lg:w-5/5">
              <div className="flex flex-col items-center py-8">
                <h1 className="mb-6 text-4xl font-bold text-white">
                  Get Up To <span className="text-5xl">30%</span>
                </h1>
                <h4 className="mb-2 text-xl font-normal text-white ">
                  USE PROMO CODE
                </h4>
                <span className="bg-[#474747] text-white rounded-md px-8 py-4 font-semibold">
                  DINEWEEKENDSALE
                </span>
              </div>
            </div>
          </div>
          {/* header right */}
          <div className="flex w-3/5 gap-4 max-lg:flex-col max-lg:w-full max-lg:items-center">
            <div className="bg-[#EFE1C7] w-2/5 flex flex-col  items-center max-lg:w-4/5">
              <div className="flex flex-col">
                <h2 className="font-light">Flex Sweathirt</h2>
                <h4 className="text-stroke-3 stroke-black">$100</h4>
              </div>
              <div>
                <Image src={event2} alt="productImg" />
              </div>
            </div>
            <div className="bg-[#d7d7d9] w-2/5 flex flex-col  items-center max-lg:w-4/5 ">
              <div className="flex flex-col">
                <h2 className="font-light">Flex Push Buttom Bomber</h2>
                <h4>$220</h4>
              </div>
              <div>
                <Image src={event3} alt="productImg" />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default PromotionEvent;
