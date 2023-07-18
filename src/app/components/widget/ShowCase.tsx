import React from "react";
import Wrapper from "../shared/Wrapper";
import event1 from "@/app/assets/event1.webp";

import Image from "next/image";

const ShowCase = () => {
  return (
    <section className="my-32 md:ml-48">
      <Wrapper>
        <div className="flex flex-col items-center justify-between gap-6 mx-10 lg:flex-row ">
          {/* leftside ProductDetails */}
          <div className="flex flex-col gap-6">
            <h1 className="items-center text-4xl font-bold ">
              Unique and Authentic Vintage Designer Jewellery
            </h1>

            <div className="grid grid-cols-2 gap-4 ">
              <div>
                <h1 className="text-xl font-medium">
                  Using Good Quality Materials
                </h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  Using Good Quality Materials
                </h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  Using Good Quality Materials
                </h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
              <div>
                <h1 className="text-xl font-medium">
                  Using Good Quality Materials
                </h1>
                <p>Lorem ipsum dolor sit amt, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          {/* rightside heading image and text */}
          <div>
            {/* heading */}

            {/* pic and paragraph */}
            <div className="flex flex-col items-center gap-4 md:flex-row ">
              <Image
                className="flex items-center justify-center"
                src={event1}
                alt="productImg"
              />
              <div className="md:w-1/2">
                {/* para */}
                <div>
                  <p className="">
                    This piece is ethically crafted in our small family-owned
                    workshop in Peru with unmatched attention to detail and
                    care. The Natural color is the actual natural color of the
                    fiber, undyed and 100% traceable.
                  </p>
                  {/* button */}
                  <button className="px-10 py-2 my-4 font-semibold text-black bg-[#ffece3] shadow-md rounded-md cursor-pointer hover:bg-[#191919] hover:text-white border-2 border-black ">
                    Start Shopping
                  </button>
                </div>
                {/* button */}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ShowCase;
