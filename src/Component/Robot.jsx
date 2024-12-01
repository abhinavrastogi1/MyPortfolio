import { useAnimations, useGLTF } from "@react-three/drei";
import Robot_playground from "../assets/3dModels/robot_playground.glb";
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
        <primitive
          object={scene}
          ref={robotRef}
          rotation={[0.15, 0.2, -0.1]}
          position={[-2.3, -1, 0]}
          scale={[2, 2, 2]}
        />
      </mesh>{" "}
    </>
  );
}

//rotation={[.6,.6,-.2]} position={[-4,1,0]}
