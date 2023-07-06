import React from "react";
import Wrapper from "../shared/Wrapper";
import FooterItem from "../widget/FooterItem";
import Logo from "@/app/assets/Logo.webp";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

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
                <a href="https://www.twitter.com/" target="_blank">
                  <FaTwitter size={24} />
                </a>
              </div>
              <div className="p-2 bg-gray-300 rounded-md">
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookF size={24} />
                </a>
              </div>
              <div className="p-2 bg-gray-300 rounded-md">
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn size={24} />
                </a>
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
  );
};

export default Footer;
