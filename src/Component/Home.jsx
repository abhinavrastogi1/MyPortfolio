import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loading } from "./Loading";
import { Spaceman } from "./Spaceman";
import ReactTypingEffect from "react-typing-effect";

function Home({ aboutRef }) {
  return (
    <>
      {" "}
      {/* add 3d model to the canvas */}
      <div className="w-full  h-[130vh] sm:h-[170vh] md:h-[190vh]  lg:h-[180vh] xl:h-[140vh]  canvas ">
        <div
          className=" w-[70%] sm:w-[60%] md:w-[55%] lg:w-[50%] xl:w-[40%] absolute top-40 sm:top-48 md:top-56 lg:top-64 z-50
         px-5 py-4 sm:px-10 sm:py-4 md:px-16 md:py-4 lg:px-20 lg:py-4 "
        >
          <ReactTypingEffect
            text={[
              "Hi, I'm Abhinav Rastogi",
              "A Passionate MERN Stack Developer!",
            ]}
            className="text-white text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] "
            cursor="🚀"
            speed={100}
            eraseSpeed={40}
            eraseDelay={1000}
            typingDelay={500}
          />
        </div>
        <button
          className="bg-red-700 z-50 absolute"
          onClick={() => {
            if (aboutRef && aboutRef.current) {
              aboutRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          click me
        </button>
        <Canvas
          camera={{ near: 0.1, far: 1000 }}
          className="z-10 h-full w-full "
        >
          <Suspense fallback={<Loading />}>
            <Spaceman depthTest={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
export default Home;
