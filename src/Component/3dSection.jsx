import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loading } from "./Loading";
import { Spaceman } from "./Spaceman";

function ThreeDimensionalSection() {
  return (
    <>
      {" "}
      {/* add 3d model to the canvas */}
      <div className="w-full h-[130vh]  absolute">
        <Canvas
          camera={{ near: 0.1, far: 1000 }}
          className="z-10 h-full w-full"
        >
          <Suspense fallback={<Loading />}>
            <directionalLight color={0x00c3e7ff} />
            <Spaceman depthTest={false} />
          </Suspense>
        </Canvas>
      </div>
      <div className=" ">
        <div className="w-full h-[1000vh] text-white  z-50 text-9xl mt-96 "> Hello</div>
      </div>
    </>
  );
}
export default ThreeDimensionalSection;
