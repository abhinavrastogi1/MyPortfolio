import { useAnimations, useGLTF } from "@react-three/drei";
import spaceman from "../assets/spaceman.glb";

import { useEffect, useRef } from "react";
export function Spaceman() {
  const { scene, animations } = useGLTF(spaceman);
  const spacemanRef = useRef();
  const { actions } = useAnimations(animations, spacemanRef);
  useEffect(() => {
    actions["Idle"].play();
    actions["Idle"].timeScale=2
  }, [animations]);

  return (
    <mesh>
      <primitive object={scene} ref={spacemanRef} rotation={[0,2,0]}c position={[0,-0.1,2]}/>
    </mesh>
  );
}
