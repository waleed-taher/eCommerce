import React from "react";
import { client } from "@/lib/sanityClient";
import Image from "next/image";
import { Image as IImage } from "sanity";
import Wrapper from "../shared/Wrapper";
import { urlForImage } from "../../../../sanity/lib/image";

//  sanity data fetching through api and build product cards
// cors used for api security
// api used for specific domain
// client side component only
// like localhost:3000 or if i push it to specific domain then it will be fetched there only

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product'][0..2]{
    title,
    description,
    image,
    price,
    category -> {
      name
    }
  }`);
  return res;
};

interface IProduct {
  title: string;
  description: string;
  image: IImage;
  price: number;
}

export default async function ProductCard(): Promise<JSX.Element> {
  const data: IProduct[] = await getProductData();
  return (
    <div>
      <Wrapper>
        <div className="grid grid-cols-3 ml-48 cursor-pointer gap-x-4 gap-y-8 max-lg:flex max-lg:flex-col max-lg:justify-center max-lg:items-center max-lg:ml-0">
          {data.map((item, index) => (
            <div className="max-h-[300px] mb-16" key={index}>
              <Image
                src={urlForImage(item.image).url()}
                alt="ProductImage"
                width={300}
                height={300}
              />
              <h2 className="text-lg font-semibold text-black">{item.title}</h2>
              <h2 className="font-semibold text-gray-500 text-md">
                {item.description}
              </h2>
              <span className="text-xl font-bold text-black">
                ${item.price}
              </span>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
