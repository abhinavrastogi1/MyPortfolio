import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { Spaceman } from "./Spaceman";
import { OrbitControls } from "@react-three/drei";

function ThreeDimensionalSection() {
  return (
    <>
      {" "}
      
      <div className="w-full h-screen bg-black realtive">
        <Canvas className="absolute" camera={{ near: 0.1, far: 1000 }}>
          <OrbitControls />
          <Suspense fallback={<LoadingScreen />}>
            <Spaceman />
          </Suspense>
        </Canvas>
      </div>
    </>
  );
}
export default ThreeDimensionalSection;
