import { FarmFloor } from "../../basicModels/floors/farm";
import { Mill } from "../../models/buildings/farm/Mill/Mill";
import { MonitorLoftedBarn } from "../../models/buildings/farm/MonitorLoftedBarn";
import { TrailSideBarn } from "../../models/buildings/farm/TrailSideBarn";

export const Farm = () => {
  return (
    <group>
      <FarmFloor />
      <TrailSideBarn />
    </group>
  );
};
