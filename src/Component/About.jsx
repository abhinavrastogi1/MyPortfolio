import React, { useState } from "react";
import myImg from "../assets/myImg2.png";

export const About = React.forwardRef((props, ref) => {
  const [showSkills, setShowSkills] = useState(true);
  return (
    <>
      <div
        className="w-full    text-center  z-20  my-0 sm:my-14 md:my-0 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-36 
        2xl:px-48 lg:py-4 xl:px-48 xl:my-20 2xl:my-7   "
        ref={ref}
        id="about"
      >
        <div className="  ">
          <h1 className="text-white  text-4xl md:text-5xl lg:text-6xl xl:text-7xl  mt-11 mb-5  font-bold ">
            {" "}
            About ME
          </h1>
        </div>{" "}
        <div className=" p-4 rounded-md shadow-md  shadow-[#03A4C3] flex  flex-col  xl:grid xl flex-none xl:grid-cols-3  gap-x-8">
          <div
            className=" h-36 w-full sm:h-44 md:h-56 lg:h-64 xl:h-72  2xl:h-96 
            flex justify-center items-center"
          >
            {" "}
            <img
              src={myImg}
              className="h-full w-36 sm:w-44   md:w-56 lg:w-64 xl:w-72  2xl:w-96  object-cover"
            />
          </div>
          <div className="xl:col-span-2">
            <p
              className="text-white text-lg  font-semibold py-7 flex 
            flex-wrap justify-start text-start  w-full xl:w-[80%] "
            >
              I'm Abhinav Rastogi, a full-stack developer skilled in the MERN
              stack, with a strong passion for backend development and a focus
              on building database-driven applications. I thrive on solving
              real-world problems and transforming ideas into functional,
              scalable solutions through code.
            </p>
            <div className=" flex flex-col gap-4  ">
              <div className="flex gap-5">
                <h2
                  className={` font-bold text-xl transition transform ease-in-out duration-500
                     ${
                       showSkills ? "text-red-500 underline " : "text-white"
                     } decoration-red-500 underline-offset-4`}
                  role="button"
                  onClick={() => {
                    setShowSkills(true);
                  }}
                >
                  Skills
                </h2>
                <h2
                  className={` font-bold text-xl transition transform ease-in-out duration-1000 origin-left
                    ${
                      !showSkills ? "text-red-500 underline " : "text-white"
                    } decoration-red-500 underline-offset-4`}
                  role="button"
                  onClick={() => {
                    setShowSkills(false);
                  }}
                >
                  Why Choose Me?{" "}
                </h2>
              </div>
              {showSkills && (
                <div className="text-white flex  flex-col justify-start gap-2 items-start flex-wrap min-h-[50%] xl:w-[80%]">
                  {" "}
                  <div className="flex text-left  gap-1">
                    <h3 className="">
                      <span className="text-base md:lg font-semibold">
                        Frontend:{" "}
                      </span>
                      <span>
                        React.js (Hooks , Context API , Redux, Next.js) HTML5 ,
                        CSS3 , TailwindCSS
                      </span>
                    </h3>
                  </div>
                  <div className="flex text-left  gap-1">
                    <h3 className="">
                      <span className="text-base md:lg font-semibold">
                        Backend:{" "}
                      </span>
                      <span>Node.js , Express.js , RESTful API's</span>
                    </h3>
                  </div>
                  <div className="flex text-left  gap-1">
                    <h3 className="">
                      <span className="text-base md:lg font-semibold">
                        Database:{" "}
                      </span>
                      <span>MongoDB , MySQL </span>
                    </h3>
                  </div>
                  <div className="flex text-left  gap-1">
                    <h3 className="">
                      <span className="text-base md:lg font-semibold">
                        Development Tools:{" "}
                      </span>
                      <span> Git , GitHub , Postman , Vs Code</span>
                    </h3>
                  </div>
                </div>
              )}
              {!showSkills && (
                <p className="flex text-left text-white text-base md:lg  font-semibold">
                  Proficient in building scalable web applications. Strong
                  backend expertise with a focus on clean, maintainable code.
                  Committed to continuous learning and staying updated with
                  industry trends.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
