"use client";
import { useState } from "react";
import { client } from "@/lib/sanityClient";
import { usePathname } from "next/navigation";
import React from "react";
import Image from "next/image";
import { Image as IImage } from "sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Wrapper from "@/app/components/shared/Wrapper";

interface IProduct {
  title: string;
  description: string;
  image: IImage;
  price: number;
}

interface ISize {
  name: string;
}

const ProductDetails = async () => {
  const [qtyCount, setqtyCount] = useState(1);
  const pathname = usePathname();
  const incompleteurl = pathname.slice(pathname.lastIndexOf("/") + 1);
  const url = incompleteurl.replaceAll("-", " ");

  const data: IProduct[] = await client.fetch(`*[title=='${url}']{
    title,
    description,
    image,
    price,
  }`);

  const size: ISize[] = await client.fetch(`*[_type=="size"]{
    name
  }`);

  const handleSubtraction = () => {
    setqtyCount(qtyCount - 1);
  };

  const handleAddition = () => {
    setqtyCount(qtyCount + 1);
    console.log(qtyCount);
  };

  return (
    <div>
      <Wrapper>
        {data.map((item) => (
          <section className="flex items-center justify-around object-none w-4/5 gap-16 ml-48">
            <div className="w-3/5">
              <Image
                src={urlForImage(item.image).url()}
                width={800}
                height={600}
                className="w-full"
                alt={item.title}
              />
            </div>
            <div className="w-2/5">
              <h1 className="text-2xl font-normal ">{item.title}</h1>
              <h1 className="mb-8 font-semibold text-gray-500 text-md">
                {item.description}
              </h1>
              <h1 className="text-3xl font-medium">Select Size</h1>
              <div className="flex gap-x-8">
                {size.map((item) => (
                  <button className="p-4 text-black rounded-full cursor-pointer hover:shadow-md hover:opacity-25 hover:text-black shadow-black hover:bg-white border-1">
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="flex gap-x-8">
                <span>Quantity</span>

                <button
                  className={`${
                    qtyCount >= 1
                      ? "rounded-full cursor-pointer"
                      : "rounded-full cursor-not-allowed"
                  }`}
                  onClick={handleSubtraction}
                >
                  -
                </button>
                <span>{qtyCount}</span>
                <button
                  className="rounded-full cursor-pointer"
                  onClick={handleAddition}
                >
                  +
                </button>
              </div>
            </div>
          </section>
        ))}
      </Wrapper>
    </div>
  );
};

export default ProductDetails;
