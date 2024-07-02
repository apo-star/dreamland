export const Mill = () => {
  return (
    <group>
      <mesh position={[0, 5, 0]}>
        <cylinderGeometry args={[2, 3.5, 10]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 11.5, 0]}>
        <coneGeometry args={[2, 3]} />
        <meshStandardMaterial />
      </mesh>
      <mesh position={[0, 13, 0]}>
        <sphereGeometry args={[0.4, 100, 100]} />
        <meshStandardMaterial />
      </mesh>
    </group>
  );
};
