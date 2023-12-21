import { Character } from '../../components/Character'
import { usePointer } from '../../store/usePointer';
import { Model } from '../Model'
import { Vector3 } from 'three'
import { RigidEndVoxel, RigidVoxel } from './Voxel';

export const PointerGameLevel = () => {
  const endVoxel = usePointer(s => s.endVoxel);
  const voxels = usePointer(s => s.voxels);

  return (
    <>
      <Character />
      <RigidEndVoxel position={endVoxel} />
      {voxels.map((v, i) => <RigidVoxel key={i} position={v} />)}
    </>
  );
}
