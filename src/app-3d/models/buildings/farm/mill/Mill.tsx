import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    Object_11: THREE.Mesh;
    Object_14: THREE.Mesh;
    Object_15: THREE.Mesh;
    Object_17: THREE.Mesh;
    Object_18: THREE.Mesh;
    Object_19: THREE.Mesh;
    Object_2: THREE.Mesh;
    Object_20: THREE.Mesh;
    Object_7: THREE.Mesh;
  };
  materials: {
    DarkGrey_02: THREE.MeshStandardMaterial;
    Grey_04: THREE.MeshStandardMaterial;
    LightBrown_00: THREE.MeshStandardMaterial;
    RoofBlack_01: THREE.MeshStandardMaterial;
    White_10: THREE.MeshStandardMaterial;
    DarkBrown: THREE.MeshStandardMaterial;
    Black: THREE.MeshStandardMaterial;
  };
};

export const Mill = (props: JSX.IntrinsicElements["group"]) => {
  const { nodes, materials } = useGLTF(
    "./assets/models/farm buildings/mill.glb"
  ) as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.025}>
        <mesh
          geometry={nodes.Object_11.geometry}
          material={materials.DarkGrey_02}
        />
        <mesh
          geometry={nodes.Object_14.geometry}
          material={materials.Grey_04}
        />
        <mesh
          geometry={nodes.Object_15.geometry}
          material={materials.LightBrown_00}
        />
        <mesh
          geometry={nodes.Object_17.geometry}
          material={materials.RoofBlack_01}
        />
        <mesh
          geometry={nodes.Object_18.geometry}
          material={materials.White_10}
        />
        <mesh
          geometry={nodes.Object_19.geometry}
          material={materials.LightBrown_00}
        />
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.DarkBrown}
        />
        <mesh
          geometry={nodes.Object_20.geometry}
          material={materials.LightBrown_00}
        />
        <mesh geometry={nodes.Object_7.geometry} material={materials.Black} />
      </group>
    </group>
  );
};

useGLTF.preload("./assets/models/farm buildings/mill.glb");
