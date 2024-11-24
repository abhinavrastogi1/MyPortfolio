import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Spaceman } from "./Spaceman";

function ThreeDimensionalSection() {
  return (
    <>
      {" "}
      <div className="w-full h-[130vh]  realtive">
        <Canvas camera={{ near: 0.1, far: 1000 }} className="z-10 h-full w-full">
          <Suspense fallback={<LoadingScreen />} >
            <directionalLight color={0x00c3e7ff} />
            <Spaceman depthTest={false} />
          </Suspense>
        </Canvas>

        <div className="w-full h-[1000vh]"></div>
      </div>
    </>
  );
}
export default ThreeDimensionalSection;
