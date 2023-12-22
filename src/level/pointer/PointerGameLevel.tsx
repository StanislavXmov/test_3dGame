import { Text } from '@react-three/drei';
import { Character } from '../../components/Character'
import { usePointer } from '../../store/usePointer';
import { RigidEndVoxel, RigidVoxel } from './Voxel';
import { Euler, Vector3 } from 'three';

export const PointerGameLevel = () => {
  const startVoxel = usePointer(s => s.startVoxel);
  const endVoxel = usePointer(s => s.endVoxel);
  const voxels = usePointer(s => s.voxels);

  return (
    <>
      <Character />
      <Text
        position={[endVoxel.x, endVoxel.y + 2.25, endVoxel.z]}
        rotation={new Euler().setFromVector3(new Vector3(0, Math.PI, 0))}
        color="black" 
        anchorX="center" 
        anchorY="middle"
        strokeColor={'black'}
        fillOpacity={0}
        strokeWidth={'0.6%'}
        fontSize={2}
      >
        End
      </Text>
      <RigidEndVoxel position={endVoxel} />
      <RigidVoxel position={endVoxel} />
      <RigidVoxel position={startVoxel} />
      {voxels.map((v, i) => <RigidVoxel key={i} position={v} />)}
    </>
  );
}
