import "../assets/css/App.css";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Farm } from "../app-3d/lands/farm";

function App() {
  return (
    <Canvas
      camera={{ fov: 30, far: 2000, near: 0.01, position: [0, 100, 100] }}
    >
      <Farm />
      <Perf position="top-left" />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
