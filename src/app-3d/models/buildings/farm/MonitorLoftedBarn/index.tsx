import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_12: THREE.Mesh;
    Object_13: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
  };
  materials: {
    ["DarkRed_10.001"]: THREE.MeshStandardMaterial;
    ["RoofBlack_01.001"]: THREE.MeshStandardMaterial;
    ["White_10.001"]: THREE.MeshStandardMaterial;
  };
};

export const MonitorLoftedBarn = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "./assets/models/farm buildings/monitorLoftedBarn.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
        <mesh
          geometry={nodes.Object_12.geometry}
          material={materials["DarkRed_10.001"]}
        />
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["DarkRed_10.001"]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["RoofBlack_01.001"]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["White_10.001"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./assets/models/farm buildings/monitorLoftedBarn.glb");
