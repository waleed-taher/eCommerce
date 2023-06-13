import React from "react";
import { client } from "@/lib/sanityClient";

//  sanity data fetching through api and build product cards
// cors used for api security
// api used for specific domain
// client side component only
// like localhost:3000 or if i push it to specific domain then it will be fetched there only

export const getProductData = async () => {
  const res = await client.fetch(`*[_type=='product']{
    title,
    description,
    price
  }`);
  return res;
};

interface IProduct {
  title: string;
  description: string;
  image: string;
  price: number;
}

export default async function ProductCard(): Promise<JSX.Element> {
  const data: IProduct[] = await getProductData();
  return (
    <>
      <div>Product Card</div>
      {data.map((item) => (
        <div className="text-xl">
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <h4>{item.price}</h4>
        </div>
      ))}
    </>
  );
}
