import Image from "next/image";
import Wrapper from "@/app/components/shared/Wrapper";
import Search from "@/app/components/widget/Search";
import { ChangeEventHandler } from "react";

const Header = () => {

  const onChange =(e: ChangeEventHandler<HTMLInputElement>) =>{
    console.log('hi')
  }
  return (
    <header>
      <Wrapper>
        <div className="flex flex-row justify-evenly items-center">
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
          <Search name="search" value="" placeholder="What Are You Looking For...." />
          <h3>Cart</h3>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
