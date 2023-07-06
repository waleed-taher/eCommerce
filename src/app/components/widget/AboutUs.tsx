import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl ">
            Dine Mart
          </h1>
          <h1 className="mb-4 text-2xl font-bold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-4xl ">
            "Discover Your Style, Define Your Fashion"
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
            At Dine Mart, we believe that fashion is an expression of
            individuality and creativity. We are passionate about providing you
            with a wide range of stylish and trendy clothing options that
            reflect your unique personality.<br></br>
            <br></br> Whether you're looking for everyday essentials, statement
            pieces, or something for a special occasion, we've got you covered.
            Our collection is carefully curated to cater to all styles, sizes,
            and tastes. From casual streetwear to elegant formal attire, we
            offer a diverse selection of clothing that encompasses the latest
            fashion trends.<br></br>
            <br></br> Explore our extensive range of products, including tops,
            dresses, bottoms, outerwear, accessories, and more. With new
            arrivals added regularly, you'll always discover something fresh and
            exciting to enhance your wardrobe. Quality is our top priority. We
            partner with reputable and ethical manufacturers to ensure that
            every item we offer is crafted with meticulous attention to detail
            and made from premium materials. We want you to feel confident in
            your purchase, knowing that each garment is designed to be durable,
            comfortable, and long-lasting.
          </p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
            <Link href="/AllProducts">
              <Button title="Continue Shopping" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
