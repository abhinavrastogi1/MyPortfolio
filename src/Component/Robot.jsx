import { useAnimations, useGLTF } from "@react-three/drei";
import Robot_playground from "../assets/robot_playground.glb";
import { useEffect, useRef } from "react";
export function Robot() {
  const { scene, animations } = useGLTF(Robot_playground);
  const robotRef = useRef();
  const { actions } = useAnimations(animations, robotRef);
  useEffect(() => {
    actions["Experiment"]?.play();
  }, [animations]);
  return (
    <>
      <mesh>
        <primitive object={scene} ref={robotRef} rotation={[0.15,.2,-.1]} position={[-2.3,-1,0]} scale={[1.8,1.8,1.8]}  />
      </mesh>{" "}
    </>
  );
}

//rotation={[.6,.6,-.2]} position={[-4,1,0]} 