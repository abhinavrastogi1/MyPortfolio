import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import { Robot } from "./Robot";
import { OrbitControls } from "@react-three/drei";
import { Loading } from "./Loading";
import { CgMail } from "react-icons/cg";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const Contact = React.forwardRef((props, ref) => {
  return (
    <>
      <div
        className="w-full  h-full   text-center  z-20  my-0 sm:my-14 md:my-0 px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-36 
        2xl:px-48 lg:py-4 xl:px-48  xl:my-20 2xl:my-7  "
        ref={ref}
        id="contact"
      >
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl xl:text-7xl  mb-5  font-bold">
          Let's Connect{" "}
        </h1>
        <div
          className="  gap-x-2  grid grid-rows-2 xl:grid-rows-none xl:grid-cols-[1.2fr_1.8fr]
        2xl:grid-cols-[1fr_2fr]  w-full rounded-md shadow-md  shadow-[#03A4C3]  "
        >
          <div className="   min-w-[100%] z-10 h-full  ">
            <Canvas
              shadows
              camera={{ near: 0.1, far: 1000 }}
              className=" w-full h-full"
            >
              <OrbitControls enableZoom={false} />
              <Lights />
              <Suspense fallback={<Loading />}>
                <Robot />
              </Suspense>
            </Canvas>
          </div>
          <div className=" min-w-[100%]  z-50 ">
            <form
              action="https://formspree.io/f/manylypw"
              method="POST"
              className="w-full flex flex-col items-start gap-y-2 xl:px-6 px-2"
            >
              <span className="text-white">Full Name</span>

              <input
                name="full name"
                type="text"
                placeholder="Enter your full name"
                required
                className="bg-[#0D3056] border-2 border-white  flex flex-wrap w-full text-base text-white font-medium p-3 rounded-md "
              />
              <span className="text-white">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="bg-[#0D3056] border-2 w-full flex flex-wrap border-white text-base text-white font-medium p-3 rounded-md "
              />
              <span className="text-white">Message</span>

              <textarea
                placeholder="Enter your message"
                required
                name="message"
                rows="10"
                className="bg-[#0D3056] border-2 w-full  flex flex-wrap border-white text-base text-white font-medium p-3 rounded-md"
              />
              <button
                type="submit "
                className="text-white p-4 rounded-md bg-[#0D3056] my-3 font-bold text-lg ml-auto"
              >
                {" "}
                submit
              </button>
            </form>
            <div className=" flex  gap-3 xl:px-6 px-2">
              <a href="mailto:abhinavrsatogi986@gmail.com" target="_blank">
                <SiGmail className=" text-white text-3xl md:text-4xl p-1  " />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinavrastogi986"
                target="_blank"
              >
                <FaLinkedin className=" text-white text-3xl md:text-4xl  p-1" />
              </a>
              <a href="https://github.com/abhinavrastogi1" target="blank">
                <FaSquareGithub className=" text-white text-3xl md:text-4xl  p-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

function Lights() {
  return (
    <>
      <ambientLight intensity={1.5} /> {/* Increase intensity */}
      <pointLight position={[-5, 5, 5]} intensity={5} color="#ffffff" />
      <spotLight position={[0, -10, 5]} angle={0.3} intensity={5} castShadow />
    </>
  );
}
