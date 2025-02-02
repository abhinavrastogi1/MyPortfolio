import React from "react";
import NutriNest from "../assets/Projects/NutriNest.png";
import Clikn from "../assets/Projects/Clikn.png";
export const Projects = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="w-full    text-center  z-20  my-0 sm:my-14 md:my-0 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-36 
        2xl:px-48 lg:py-4 xl:px-48  xl:my-20 2xl:my-7 "
        ref={ref}
        id="projects"
      >
        <div>
          <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl  mb-2  font-bold">
            {" "}
            Projects
          </h1>
        </div>{" "}
        <div className="flex flex-col  mt-10 gap-10">
          {" "}
          <div className="flex flex-col  md:flex-row justify-start  items-start rounded-md shadow-md  shadow-[#03A4C3]">
            {" "}
            <a
              className="block h-full w-full md:h-[50%] md:w-[50%] xl:h-[40%] xl:w-[40%]"
              href="https://app.clikn.in"
              target="_blank"
            >
              <img src={Clikn} className="h-full w-full p-4" alt="clikn img" />
            </a>
            <div className="text-white w-full md:w-[50%]  flex flex-col justify-start gap-3 p-3 ">
              {" "}
              <a href="https://app.clikn.in" target="_blank">
                {" "}
                <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-start text-[#1584C1]">
                  🚀 Clikn - URL Shortener & Analytics{" "}
                </h1>
              </a>
              <p
                className=" text-left text-lg text-white  font-bold  flex 
            flex-wrap justify-start items-start  w-full xl:text-xl"
              >
                Clikn - URL Shortener & Analytics A URL shortener with QR code
                generation and analytics tracking (location, device type,
                browser). Built with MERN stack and Recharts for data
                visualization.
              </p>
              <a href="https://clikn.in" target="_blank"></a>
              <h2
                className="text-white text-left  font-semibold flex 
            flex-wrap justify-start items-start  w-full"
              >
                {" "}
                <span> 🔗 Live: </span>{" "}
                <a
                  href="https://app.clikn.in"
                  target="_blank"
                  className="underline pl-1 hover:text-[#1584C1] transition transform duration-500 ease-in-out"
                >
                  app.clikn.in
                </a>
              </h2>
              <h2
                className="text-white   font-semibold  flex 
            flex-wrap justify-start items-start  w-fulltext-left "
              >
                {" "}
                <span> 📂 GitHub:</span>{" "}
                <a
                  href="https://github.com/abhinavrastogi1/Clikn"
                  target="_blank"
                  className="underline pl-1 hover:text-[#1584C1] transition transform duration-500 ease-in-out"
                >
                  github.com/abhinavrastogi1/Clikn
                </a>
              </h2>
            </div>
          </div>
          <div className="flex flex-col  md:flex-row justify-start  items-start rounded-md shadow-md  shadow-[#03A4C3]">
            {" "}
            <a
              className="block h-full w-full md:h-[50%] md:w-[50%] xl:h-[40%] xl:w-[40%]"
              href="https://nutrinest.clikn.in"
              target="_blank"
            >
              <img
                src={NutriNest}
                className="h-full w-full p-4"
                alt="nutrinest img"
              />
            </a>
            <div className="text-white w-full md:w-[50%]  flex flex-col justify-start gap-3 p-3 ">
              {" "}
              <a href="https://nutrinest.clikn.in" target="_blank">
                {" "}
                <h1 className="font-bold text-2xl sm:text-3xl md:text-3xl xl:text-4xl text-start text-[#1584C1]">
                  🛒 NutriNest - Online Grocery App{" "}
                </h1>
              </a>
              <p
                className=" text-left text-lg text-white  font-bold  flex 
            flex-wrap justify-start items-start  w-full xl:text-xl"
              >
                NutriNest - Online Grocery App A grocery shopping app with
                product browsing, cart management, secure checkout, and
                real-time order tracking. Built with MERN stack, Stripe API, and
                Firebase Auth. 🔗 Live: [Add Link] | 📂 GitHub: [Add Link]
              </p>
              <a href="https://nutrinest.clikn.in" target="_blank"></a>
              <h2
                className="text-white text-left  font-semibold flex 
            flex-wrap justify-start items-start  w-full"
              >
                {" "}
                <span> 🔗 Live: </span>{" "}
                <a
                  href="https://nutrinest.clikn.in"
                  target="_blank"
                  className="underline pl-1 hover:text-[#1584C1] transition transform duration-500 ease-in-out"
                >
                  nutrinest.clikn.in
                </a>
              </h2>
              <h2
                className="text-white   font-semibold  flex 
            flex-wrap justify-start items-start  w-fulltext-left "
              >
                {" "}
                <span> 📂 GitHub:</span>{" "}
                <a
                  href="https://github.com/abhinavrastogi1/NutriNest"
                  target="_blank"
                  className="underline pl-1 hover:text-[#1584C1] transition transform duration-500 ease-in-out"
                >
                  github.com/abhinavrastogi1/NutriNest
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
