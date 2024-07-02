import { Vector2 } from "three";
import { GrassTexture } from "../../../textures/grassTexture";

export const FarmFloor = () => {
  return (
    <group>
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[500, 500]} />
        <GrassTexture
          repeat={[200, 200]}
          rotation={0}
          offset={new Vector2(1, 1)}
        />
      </mesh>
    </group>
  );
};
