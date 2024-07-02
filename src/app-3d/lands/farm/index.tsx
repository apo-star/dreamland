import { FarmFloor } from "../../basicModels/floors/farm";
import { Mill } from "../../models/buildings/farm/mill";

export const Farm = () => {
  return (
    <group>
      <mesh>
        <meshStandardMaterial />
        <boxGeometry />
      </mesh>
      <FarmFloor />
      <Mill />
    </group>
  );
};
