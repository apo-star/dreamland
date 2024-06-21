import { Environment, OrbitControls } from "@react-three/drei";
import "../assets/css/App.css";
import { Canvas } from "@react-three/fiber";

function App() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
