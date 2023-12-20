import { usePointer } from "../../store/usePointer";

const n = 2.5;

export const Ghost = () => {
  const pos = usePointer(s => s.pos);
  const isGhost = usePointer(s => s.isGhost);

  return (
    <mesh 
      position={pos}
    >
      <boxGeometry args={[n, n, n]} />
      <meshStandardMaterial color={'#ffffff'} transparent opacity={isGhost ? 0.4 : 0} />
    </mesh>
  );
}