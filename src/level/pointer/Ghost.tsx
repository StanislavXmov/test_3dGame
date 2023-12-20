import { usePointer } from "../../store/usePointer";

export const Ghost = () => {
  const pos = usePointer(s => s.pos);
  const isGhost = usePointer(s => s.isGhost);

  return (
    <mesh 
      position={pos}
    >
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={'#ffffff'} transparent opacity={isGhost ? 0.4 : 0} />
    </mesh>
  );
}