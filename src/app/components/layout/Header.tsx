
import react from 'react'
'use client'
import React, {useState} from 'react'
import Image from "next/image";
import Wrapper from "@/app/components/shared/Wrapper";
import Search from "@/app/components/widget/Search";
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Header = () => {
  const [cartCount, setCartCount] = useState(0)
  return (
    <header>
      <Wrapper>
        <div className="flex flex-row items-center justify-evenly">
          <div>
            {/* add Logo Here */}
            <h3>Dine Market</h3>
          </div>
          {/* navbar here */}
          <nav>
            <ul className="flex flex-row justify-between gap-12">
              <li>
                <a>Female</a>
              </li>
              <li>
                <a>Male</a>
              </li>
              <li>
                <a>Kids</a>
              </li>
              <li>
                <a>All Products</a>
              </li>
            </ul>
          </nav>
          <Search name="search"  placeholder="What Are You Looking For...." />
          <div className='relative cursor-pointer '>
            <AiOutlineShoppingCart size={28}/>
            <span className='absolute pl-[7px] pr-[7px] rounded-[10px]  top-[-4px] right-[-4px] text-[7px] bg-red-500 text-white py-[4px]'>{cartCount}</span>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
