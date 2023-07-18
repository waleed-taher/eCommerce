"use client";

import Cookies from "universal-cookie";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface IProduct {
  _id: string;
  title: string;
  description: string;
  image: IImage;
  price: number;
}

const Cart = async () => {

  
  const cookies = new Cookies();
  const user_id = cookies.get("user_id");

  const res = await fetch(`http://localhost:3000/api/cart?user_id=${user_id}`);
  const data = await res.json();
  
  const data2: IProduct[] =
    await client.fetch(`*[_id=='${data.res[0].product_id}']{
        _id,
        title,
        description,
        image,
        price,
      }`);

  

  

  return (
    <>
      {data2.map((item) => (
        <section className="flex justify-center gap-40">
          <div className="flex flex-col justify-between items-center sm:flex-row-reverse md:w-[70%] my-40 content-end   ">
            <div className="mx-auto max-w-screen-2xl ">
              <h1 className="text-2xl font-bold">Shopping Cart</h1>

              <div className="flex flex-col gap-16 mt-8 lg:flex-row">
                <div className="flex-[3_1] space-y-10">
                  <div className="flex justify-between mt-4">
                    <div className="flex flex-col w-full gap-4 sm:flex-row">
                      <Image
                        src={urlForImage(item.image).url()}
                        width={800}
                        height={600}
                        className="w-full"
                        alt={item.title}
                      />
                      <div className="w-full space-y-4">
                        <div className="flex justify-between">
                          <h2 className="text-xl text-[#212121] font-light"></h2>
                        </div>
                        <h4 className="font-medium text-[#666]">
                          {item.description}
                        </h4>
                        <h4 className="font-medium">Delivery Estimation</h4>
                        <h4 className="font-medium text-[#ffc700]">
                          5 Working Days
                        </h4>
                        <div className="flex justify-between">
                          <h4 className="text-xl font-semibold tracking-widest">
                            $ {item.price}
                          </h4>
                          <div className="flex items-center gap-3">
                            <div className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer">
                              -
                            </div>
                            <span>1</span>
                            <div className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer">
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Payement */}
                <div className="bg-[#fbfcff] flex-1 flex flex-col gap-8 p-8">
                  <h4 className="text-xl font-bold">Order Summary</h4>
                  <div className="flex justify-between">
                    <h4>Quantity</h4>
                    <h4>1 Product</h4>
                  </div>
                  <div className="flex justify-between">
                    <h4>Sub Total</h4>
                    <h4>$ {item.price}</h4>
                  </div>
                  <a href={"/Checkout"}>
                    <div className="flex flex-col gap-2">
                      <button className="py-3 text-sm font-semibold text-white bg-black cursor-pointer disabled:opacity-20 disabled:cursor-not-allowed">
                        Process to Checkout
                      </button>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
    // <section className="flex justify-center gap-40 ">
    //   <div className="flex flex-col justify-between items-center sm:flex-row-reverse md:w-[70%] my-40 content-end   ">
    //     <div className="mx-auto max-w-screen-2xl ">
    //       <h1 className="text-2xl font-bold">Shopping Cart</h1>
    //       <div className="flex flex-col gap-16 mt-8 lg:flex-row">
    //         <div className="flex-[3_1] space-y-10">
    //           <div className="flex justify-between mt-4">
    //             <div className="flex flex-col w-full gap-4 sm:flex-row">
    //               <img
    //                 alt=""
    //                 width="224"
    //                 height="208"
    //                 className="xl:w-64 w-52 h-52 rounded-xl"
    //               ></img>
    //               <div className="w-full space-y-4">
    //                 <div className="flex justify-between">
    //                   <h2 className="text-xl text-[#212121] font-light"></h2>
    //                 </div>
    //                 <h4 className="font-medium text-[#666]">Jackets</h4>
    //                 <h4 className="font-medium">Delivery Estimation</h4>
    //                 <h4 className="font-medium text-[#ffc700]">
    //                   5 Working Days
    //                 </h4>
    //                 <div className="flex justify-between">
    //                   <h4 className="text-xl font-semibold tracking-widest">
    //                     $225
    //                   </h4>
    //                   <div className="flex items-center gap-3">
    //                     <div className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer">
    //                       -
    //                     </div>
    //                     <span>1</span>
    //                     <div className="text-2xl px-3.5 py-1 bg-[#f1f1f1] rounded-full cursor-pointer">
    //                       +
    //                     </div>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* Payement */}
    //         <div className="bg-[#fbfcff] flex-1 flex flex-col gap-8 p-8">
    //           <h4 className="text-xl font-bold">Order Summary</h4>
    //           <div className="flex justify-between">
    //             <h4>Quantity</h4>
    //             <h4>1 Product</h4>
    //           </div>
    //           <div className="flex justify-between">
    //             <h4>Sub Total</h4>
    //             <h4>$225</h4>
    //           </div>
    //           <div className="flex flex-col gap-2">
    //             <button className="py-3 text-sm font-semibold text-white bg-black disabled:opacity-20 disabled:cursor-not-allowed">
    //               Process to Checkout
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default Cart;
