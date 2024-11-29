import React from "react";
import myImg from "../assets/myImg2.png";

export const About = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="w-full   h-[100vh] text-center    my-28 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-48 lg:py-4"
        ref={ref}
      >
        <div>
          <h1 className="text-white  text-7xl my-11 font-bold "> About ME</h1>
        </div>{" "}
        <div className=" grid  grid-cols-3 gap-x-8">
          <img src={myImg} className="h-96 w-96 object-cover" />
          <p className="text-white text-2xl font-semibold py-7 col-span-2 ">
            {" "}
            I'm Abhinav Rastogi, a MERN stack developer with a strong passion
            for backend development and a knack for building database-driven
            applications. I enjoy solving real-world problems and turning ideas
            into reality through code.
          </p>
        </div>
      </div>
    </>
  );
});
