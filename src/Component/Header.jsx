import { CiMenuFries } from "react-icons/ci";

import logo from "../assets/ARlogo2.png";
export function Header() {
  return (
    <>
      <div className=" flex justify-between w-full fixed z-30 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4">
        <div> 
          <img src={logo} className="w-14 h-14 sm:w-16 sm:h-16 md:h-18 md:w-18  lg:w-20 lg:h-20" />
        </div>
        <div>
          <CiMenuFries className =" my-3  text-xl text-white  sm:text-3xl" style={{strokeWidth:2}} />
        </div>
      </div>
    </>
  );
}
