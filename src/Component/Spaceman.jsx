import { useAnimations, useGLTF } from "@react-three/drei";
import spaceman from "../assets/spaceman.glb";
import { a } from "@react-spring/three";
import { useEffect, useRef } from "react";
export function Spaceman() {
  const { scene, animations } = useGLTF(spaceman);
  const spacemanRef = useRef();
  const { actions } = useAnimations(animations, spacemanRef);
  useEffect(() => {
    actions["Idle"].play();
  }, [animations]);

  return (
    <mesh>
      <primitive object={scene} ref={spacemanRef} rotation={[2, 8, 4.7]}
      position={[1.2,-0.9,1.7]} />
    </mesh>
  );
}
