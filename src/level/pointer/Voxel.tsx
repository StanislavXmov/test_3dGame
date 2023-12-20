import { Vector3 } from "three";
import { usePointer } from "../../store/usePointer";

export const Voxel = ({position}: {position: Vector3}) => {
  const setIsGhost = usePointer(s => s.setIsGhost);

  const onPointerLeave = () => {
    setIsGhost(false);
  }

  return (
    <mesh 
      position={position}
      onPointerLeave={onPointerLeave}
    >
      <boxGeometry args={[5, 5, 5]} />
      <meshStandardMaterial color={'#2b2b2b'} />
    </mesh>
  );
}