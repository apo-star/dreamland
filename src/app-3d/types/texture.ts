import { Vector2 } from "three";

export interface ITexture {
  repeat: [number, number];
  rotation: number;
  offset: Vector2;
}
