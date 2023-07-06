import Link from "next/link";
import React from "react";


interface FooterProps {
  heading: string;
  arr: Array<string>;

}

const FooterItem = ({ heading, arr  }: FooterProps) => {
  return (
    <div className="">
      <h2 className="mb-8 text-xl font-bold">{heading}</h2>
      <ul>
        {arr.map((string, index) => (
            <li
              key={index}
              className="mb-4 text-lg hover:text-[#d63384] text-[#525258] cursor-pointer"
            >
              {string}
            </li>
          
        ))}
      </ul>
    </div>
  );
};

export default FooterItem;
