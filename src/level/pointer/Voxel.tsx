import { Vector3 } from "three";
import { usePointer } from "../../store/usePointer";
import { RigidBody } from "@react-three/rapier";

const n = 2.5;

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
      <boxGeometry args={[n, n, n]} />
      <meshStandardMaterial color={'#5E6A81'} />
    </mesh>
  );
}

export const RigidVoxel = ({position}: {position: Vector3}) => {
  return (
    <RigidBody 
      type="fixed" 
      colliders="trimesh" 
      position={position}
    >
      <mesh >
        <boxGeometry args={[n, n, n]} />
        <meshStandardMaterial color={'#5E6A81'} />
      </mesh>
    </RigidBody>
  );
}