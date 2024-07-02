import { FarmFloor } from "../../models/floors/farm";

export const Farm = () => {
  return (
    <group>
      <mesh>
        <meshStandardMaterial />
        <boxGeometry />
      </mesh>
      <FarmFloor />
    </group>
  );
};
