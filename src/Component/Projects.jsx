import React from "react";
import NutriNest from "../assets/Projects/NutriNest.png";
export const Projects = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className=" w-full text-center px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4"
        ref={ref} id="projects"
      >
        <div>
          <h1 className="text-white  text-7xl my-11 font-bold "> Projects</h1>
        </div>{" "}
        <img src={NutriNest}  />
      </div>
    </>
  );
})
