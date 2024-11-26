import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loading } from "./Loading";
import { Spaceman } from "./Spaceman";

function ThreeDimensionalSection() {
  return (
    <>
      {" "}
      {/* add 3d model to the canvas */}
      <div className="w-full  h-[130vh] sm:h-[170vh] md:h-[190vh]  lg:h-[180vh] xl:h-[140vh] relative">
        <Canvas
          camera={{ near: 0.1, far: 1000 }}
          className="z-10 h-full w-full "
        >
          <Suspense fallback={<Loading />}>
            <directionalLight color={0x00c3e7ff} />
            <Spaceman depthTest={false} />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
export default ThreeDimensionalSection;
