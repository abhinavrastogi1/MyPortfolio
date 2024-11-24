import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { LoadingScreen } from "./LoadingScreen";
import { OrbitControls } from "@react-three/drei";
import { Spaceman } from "./Spaceman";
import Stars from "../assets/1Stars.svg";
import Planets from "../assets/2Planets.svg";
import Moutains from "../assets/3Mountain.svg";
import BottomMOuntains from "../assets/4Mountain.svg";
import Crater from "../assets/5Crater.svg";
import Sun from "../assets/6Sun.svg";

function ThreeDimensionalSection() {
  return (
    <>
      {" "}
      <div className="w-full h-[150vh]  realtive">
        <img src={Stars} className="z-0 absolute  w-full" />
        <img src={Planets} className="z-0 absolute" />
        <img src={Moutains} className="z-0 absolute " />
        <img src={BottomMOuntains} className="z-0 absolute" />
        <img src={Crater} className="z-0 absolute" />
        <img src={Sun} className="z-0 absolute" />
        <Canvas className="absolute" camera={{ near: 0.1, far: 1000 }}>
          <OrbitControls enableZoom={false} />
          <Suspense fallback={<LoadingScreen />}>
            <directionalLight color={0x00c3e7ff} />
            <Spaceman depthTest={false} />
          </Suspense>
        </Canvas>

        <div className="w-full h-[100vh]"></div>
      </div>
    </>
  );
}
export default ThreeDimensionalSection;
