import { FarmFloor } from "../../basicModels/floors/farm";
import { Mill } from "../../models/buildings/farm/Mill/Mill";
import { MonitorLoftedBarn } from "../../models/buildings/farm/MonitorLoftedBarn";
export const Farm = () => {
  return (
    <group>
      <FarmFloor />
      <MonitorLoftedBarn />
    </group>
  );
};
