import Image from "next/image";
import React from "react";
import heroImg from "@/app/assets/heroImg.webp";
import OurBrand1 from "@/app/assets/Featured1.webp";
import OurBrand2 from "@/app/assets/Featured2.webp";
import OurBrand3 from "@/app/assets/Featured3.webp";
import OurBrand4 from "@/app/assets/Featured4.webp";
import Wrapper from "../shared/Wrapper";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex items-center gap-8 justify-evenly main_hero">
          <div className="flex flex-col ml-12 gap-y-8 left_header">
            <div className="mt-20 content">
              <span className="px-4 py-2 font-semibold text-blue-600 bg-blue-200 rounded-md">
                Sale 70%
              </span>
              <h2 className="mt-8 mb-8 text-6xl font-bold text-black">
                An Industrial Take on <br /> Streetwear
              </h2>
              <p className="font-md  text-[#a8a7a9] font-medium mb-8">
                Anyone can beat you but no one can beat your outfit as long as
                you <br /> wear Dine Outfits
              </p>
              <button className="px-20 py-4 mb-8 font-semibold text-white bg-black rounded-md shadow-inner cursor-pointer hover:bg-white hover:text-black shadow-slate-800">
                Start Shopping
              </button>
            </div>
            <div className="flex gap-24 mb-8 justify-evenly featured_brands">
              <Image src={OurBrand1} alt="brandImg" />
              <Image src={OurBrand2} alt="brandImg" />
              <Image src={OurBrand3} alt="brandImg" />
              <Image src={OurBrand4} alt="brandImg" />
            </div>
          </div>
          <div className=" rounded-full w-[600px] h-[600px] bg-[#ffece3] max-2xl:hidden">
            <div className="">
              <Image
                src={heroImg}
                alt="heroImg"
                // width={650}
                // height={650}
                className="mt-12 ml-8"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
