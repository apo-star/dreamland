import "../assets/css/App.css";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { SpringLand } from "../componentsFor3D/lands/springland";

function App() {
  return (
    <Canvas>
      <SpringLand />
      <Perf position="top-left" />
      <Environment preset="city" />
      <OrbitControls makeDefault />
    </Canvas>
  );
}

export default App;
