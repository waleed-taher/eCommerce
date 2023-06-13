import React from "react";
import Wrapper from "../shared/Wrapper";
import FooterItem from "../widget/FooterItem";
import Logo from "@/app/assets/Logo.webp";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <footer className="flex flex-row gap-4 justify-evenly max-lg:mx-4 max-lg:gap-y-4 max-lg:flex-col">
        <div className="mb-8">
          <div>
            <a>
              <Image
                src={Logo}
                alt="Dine Market Logo"
                className="mb-8 cursor-pointer"
              />
            </a>
            <h3 className="text-[#525258] text-lg break-words mb-8">
              Small, artisan label that offers a thoughtfully <br /> curated
              collection of high quality everyday <br /> essentials made.
            </h3>
            <div className="flex flex-row gap-4">
              <div className="p-2 bg-gray-300 rounded-md ">
                <FaTwitter size={24} />
              </div>
              <div className="p-2 bg-gray-300 rounded-md">
                <FaFacebookF size={24} />
              </div>
              <div className="p-2 bg-gray-300 rounded-md">
                <FaLinkedinIn size={24} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <FooterItem
            heading="Company"
            arr={[
              "About Us",
              "Terms of Use",
              "Privacy Policy",
              "How it Works",
              "Contact Us",
            ]}
          />
        </div>
        <div>
          <FooterItem
            heading="Support"
            arr={["Support Career", "24h Service", "Quick Chat"]}
          />
        </div>
        <div>
          <FooterItem heading="Contact" arr={["Whatsapp", "Support 24h"]} />
        </div>
      </footer>
    </Wrapper>
    // <Wrapper>
    //   <footer className="justify-around">
    //     <div className="flex flex-col items-center justify-center">
    //       <div className="">
    //         <div>
    //           <a href="/">
    //             <img
    //               src="https://hamart-shop.vercel.app/_next/static/media/logo-black.de19b08e.svg"
    //               alt="logo"
    //               className="mb-6 cursor-pointer"
    //             />
    //           </a>
    //           <h3 className="text-[#525258]">
    //             The home and elements <br /> needed to create beautiful <br />{" "}
    //             products.
    //           </h3>
    //           <div className="flex justify-start space-x-3 text-[#525258] mt-8 ">
    //             {/* <FaFacebookF
    //               size={16}
    //               className="cursor-pointer hover:text-[#d63384]"
    //             />
    //             <FaTwitter
    //               size={16}
    //               className="cursor-pointer hover:text-[#d63384]"
    //             />
    //             <FaLinkedinIn
    //               size={16}
    //               className="cursor-pointer hover:text-[#d63384]"
    //             />
    //             <FaYoutube
    //               size={16}
    //               className="cursor-pointer hover:text-[#d63384] font-semibold"
    //             /> */}
    //           </div>
    //         </div>
    //       </div>
    //       <FooterItem
    //         heading="Company"
    //         arr={[
    //           "About us",
    //           "Careers",
    //           "Store Locations",
    //           "Our Blog",
    //           "Reviews",
    //         ]}
    //       />
    //       <FooterItem
    //         heading="Shop"
    //         arr={[
    //           "Games & Video",
    //           "Phone & Tablets",
    //           "Computer & Laptops",
    //           "Sport Watches",
    //           "Discount",
    //         ]}
    //       />
    //       <FooterItem
    //         heading="Support"
    //         arr={["FAQs", "Reviews", "Contact Us", "Shipping", "Returns"]}
    //       />

    //       <div className="mt-32 mb-10 font-['Roboto']">
    //         <h2 className="text-xl font-bold mb-9">Talk To Us</h2>
    //         <h4 className="text-[#525258]">
    //           Find a location nearest you. <br />{" "}
    //           <span>
    //             See{" "}
    //             <a className="font-semibold underline underline-offset-2 decoration-rose-500 text-rose-500">
    //               Our Stores
    //             </a>
    //           </span>
    //         </h4>
    //         <h2 className="font-medium text-2xl text-black hover:text-[#d63384] mt-6 mb-2">
    //           +624 423 26 72
    //         </h2>
    //         <h3 className="text-[#525258]">support@harry.com</h3>
    //       </div>
    //     </div>
    //     <hr className="mb-4" />
    //     <div className="flex justify-between mb-10 100vh">
    //       <div>
    //         <p className="text-[#525258] ">
    //           Copyright © 2023 by <a className="text-rose-500 ">Hamart</a> All
    //           rights reserved.
    //         </p>
    //       </div>
    //       <div className="">
    //         <img
    //           src="https://hamart-shop.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffooter-payment.a37c49ac.png&w=256&q=75"
    //           alt="payment methods available"
    //         />
    //       </div>
    //     </div>
    //   </footer>
    // </Wrapper>
  );
};

export default Footer;
