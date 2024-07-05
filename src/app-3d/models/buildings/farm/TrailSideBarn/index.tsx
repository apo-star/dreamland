import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_13: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
  };
  materials: {
    ["DarkRed_10.002"]: THREE.MeshStandardMaterial;
    ["RoofBlack_01.002"]: THREE.MeshStandardMaterial;
    ["White_10.002"]: THREE.MeshStandardMaterial;
  };
};

export const TrailSideBarn = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "./assets/models/farm buildings/trailsideBarn.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
        <mesh
          geometry={nodes.Object_13.geometry}
          material={materials["DarkRed_10.002"]}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials["RoofBlack_01.002"]}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials["White_10.002"]}
        />
      </group>
    </group>
  );
};

useGLTF.preload("./assets/models/farm buildings/trailsideBarn.glb");
