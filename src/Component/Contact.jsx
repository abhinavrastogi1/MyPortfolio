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
        className="w-full h-[100vh]  text-center px-5 py-4 sm:px-10 sm:py-4 
      md:px-16 md:py-4 lg:px-48 lg:py-4 mb-10 "
        ref={ref}
        id="contact"
      >
        <h1 className="text-white text-7xl mb-10 font-bold">Let's Connect </h1>
        <div className=" h-[80%] gap-x-2 flex w-full  justify-end flex-wrap ">
          <div className="w-[100%]  absolute h-[15%] z-10  ">
            <Canvas shadows camera={{ near: 0.1, far: 1000 }} className="  ">
              <OrbitControls enableZoom={false} />
              <Lights />
              <Suspense fallback={<Loading />}>
                <Robot />
              </Suspense>
            </Canvas>
          </div>
          <div className=" w-[60%]  z-20 ">
            <form
              action="https://formspree.io/f/manylypw"
              method="POST"
              className="w-full flex flex-col items-start gap-y-2"
            >
              <span className="text-white">Full Name</span>

              <input
                name="full name"
                type="text"
                placeholder="Enter your full name"
                size={80}
                required
                className="bg-[#0D3056] border-2 border-white text-base text-white font-medium p-3 rounded-md "
              />
              <span className="text-white">Email</span>
              <input
                name="email"
                type="email"
                placeholder="Enter your email"
                size={80}
                required
                className="bg-[#0D3056] border-2 border-white text-base text-white font-medium p-3 rounded-md "
              />
              <span className="text-white">Message</span>

              <textarea
                placeholder="Enter your message"
                required
                name="message"
                rows="10"
                cols={80}
                className="bg-[#0D3056] border-2 border-white text-base text-white font-medium p-3 rounded-md"
              />
              <button
                type="submit "
                className="text-white p-4 rounded-md bg-[#0D3056] my-3 font-bold text-lg ml-[73%]"
              >
                {" "}
                submit
              </button>
            </form>
            <div className=" flex  gap-3">
              <a href="mailto:abhinavrsatogi986@gmail.com" target="_blank">
                <SiGmail className=" text-white text-4xl p-1 " />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-rastogi-a664612a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                <FaLinkedin className=" text-white text-4xl p-1" />
              </a>
              <a href="https://github.com/abhinavrastogi1" target="blank">
                <FaSquareGithub className=" text-white text-4xl p-1" />
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
