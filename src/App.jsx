import { BoxGeometry } from "three";
import "./App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  );
}

export default App