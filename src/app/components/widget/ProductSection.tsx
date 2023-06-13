import React from "react";
import Wrapper from "../shared/Wrapper";
import ProductCard from "./ProductCard";

const ProductSection = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col items-center mb-8 gap-y-2">
          <h2 className="text-xl font-semibold text-blue-500 ">Products</h2>
          <h1 className="text-4xl font-bold">Check What We Have</h1>
        </div>
        <div>
          {/* @ts-expect-error Server Component */}
          <ProductCard />
        </div>
      </Wrapper>
    </section>
  );
};

export default ProductSection;
