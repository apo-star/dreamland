/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";
import { RepeatWrapping, TextureLoader } from "three";
import { ITexture } from "../../types/texture";

export const GrassTexture = ({ repeat, rotation, offset }: ITexture) => {
  const map = useMemo(() => {
    const texture = new TextureLoader().load(
      "/assets/textures/grass/grassA.jpg"
    );

    texture.wrapS = RepeatWrapping;
    texture.wrapT = RepeatWrapping;
    texture.repeat.set(repeat[0], repeat[1]);
    texture.rotation = rotation;
    texture.offset = offset;

    return texture;
  }, []);

  return <meshStandardMaterial map={map} />;
};
