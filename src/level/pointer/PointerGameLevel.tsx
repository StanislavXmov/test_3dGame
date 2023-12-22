import { Character } from '../../components/Character'
import { usePointer } from '../../store/usePointer';
import { RigidEndVoxel, RigidVoxel } from './Voxel';

export const PointerGameLevel = () => {
  const startVoxel = usePointer(s => s.startVoxel);
  const endVoxel = usePointer(s => s.endVoxel);
  const voxels = usePointer(s => s.voxels);

  return (
    <>
      <Character />
      <RigidEndVoxel position={endVoxel} />
      <RigidVoxel position={endVoxel} />
      <RigidVoxel position={startVoxel} />
      {voxels.map((v, i) => <RigidVoxel key={i} position={v} />)}
    </>
  );
}
