import { CiMenuFries } from "react-icons/ci";

import logo from "../assets/ARlogo2.png";
export function Header() {
  return (
    <>
      <div className=" flex justify-between w-full fixed z-30 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4">
        <div> 
          <img src={logo} className="w-16 h-16 sm:w-18 sm:h-18 md:h-20 md:w-20  lg:w-24 lg:h-24" />
        </div>
        <div>
          <CiMenuFries className =" my-4  text-2xl text-white  sm:text-3xl" style={{strokeWidth:2}} />
        </div>
      </div>
    </>
  );
}
