import { useGLTF } from "@react-three/drei";
import spaceman from "../assets/spaceman.glb";
import {a} from "@react-spring/three"
export function Spaceman() {
  const floatingSpaceman = useGLTF(spaceman);

  return (
    <mesh>
      <primitive object={floatingSpaceman.scene} />
    </mesh>
  );
}
