import { useAnimations, useGLTF } from "@react-three/drei";
import spaceman from "../assets/spaceman.glb";
import { useEffect, useRef, useState } from "react";
export function Spaceman() {
  const { scene, animations } = useGLTF(spaceman);
  const [position, setPosition] = useState([0, -0.8, 2]);
  const [scale, setScale] = useState([0.6, 0.6, 0.6]);
  const spacemanRef = useRef();
  const { actions } = useAnimations(animations, spacemanRef);
  useEffect(() => {
    actions["Idle"].play();
    actions["Idle"].timeScale = 2;
  }, [animations]);

  useEffect(() => {
    function resize() {
      const width = window.innerWidth;
      if (width > 640 && width < 768) {
        setPosition([0, -0.7, 2]);
        setScale([0.6, 0.6, 0.6]);
      } else if (width >= 768 && width < 1024) {
        setPosition([0, -0.6, 2]);
        setScale([0.7, 0.7, 0.7]);
      } else if (width >= 1024 && width < 1280) {
        setPosition([0, -0.6, 2]);
        setScale([0.8, 0.8, 0.8]);
      } else if (width > 1280) {
        setPosition([0, -0.5, 2]);
        setScale([1, 1, 1]);
      }
    }
    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return (
    <mesh renderOrder={100}>
      <primitive
        object={scene}
        ref={spacemanRef}
        rotation={[0, 2, 0.4]}
        position={position}
        scale={scale}
      />
    </mesh>
  );
}
