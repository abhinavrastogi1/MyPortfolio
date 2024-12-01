import { CiMenuFries } from "react-icons/ci";
import { HiOutlineDownload } from "react-icons/hi";

import logo from "../assets/ARlogo2.png";
export function Header({
  aboutRef,
  homeRef,
  projectsRef,
  contactRef,
  currentActive,
}) {
  return (
    <>
      <div className=" flex justify-between w-full fixed z-30 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4">
        <div>
          <img
            src={logo}
            className="w-16 h-16 sm:w-18 sm:h-18 md:h-20 md:w-20  lg:w-24 lg:h-24"
          />
        </div>
        <div className="flex gap-14 py-5">
          <a href="../assets/ARlogo2.png" download="ARlogo2.png">
            <button className="bg-[#1584C1] text-white  h-10 p-2 w-28 flex font-bold rounded-lg ">
              <HiOutlineDownload className="text-2xl" />
              <span>Resume</span>
            </button>
          </a>
          {/* <CiMenuFries
            className="   text-4xl text-white  sm:text-3xl mt-1"
            style={{ strokeWidth: 2 }}
          /> */}
          <ul className="flex flex-col  ">
            <li
              className={`  hover:text-white font-bold text-xl  w-28 p-2 cursor-pointer ${
                currentActive === "home"
                  ? "text-white border-r-4 border-white"
                  : "text-gray-600"
              }  `}
              onClick={() => {
                homeRef?.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Home
            </li>
            <li
              className={`  hover:text-white font-bold text-xl  w-28 p-2 cursor-pointer ${
                currentActive === "about"
                  ? "text-white border-r-4 border-white"
                  : "text-gray-600"
              }  `}
              onClick={() => {
                aboutRef?.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </li>
            <li
              className={`  hover:text-white font-bold text-xl  w-28 p-2 cursor-pointer ${
                currentActive === "projects"
                  ? "text-white border-r-4 border-white"
                  : "text-gray-600"
              }  `}
              onClick={() => {
                projectsRef?.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Projects
            </li>
            <li
              className={`  hover:text-white font-bold text-xl  w-28 p-2 cursor-pointer ${
                currentActive === "contact"
                  ? "text-white border-r-4 border-white"
                  : "text-gray-600"
              }  `}
              onClick={() => {
                contactRef?.current.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
