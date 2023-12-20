import { Character } from '../../components/Character'
import { usePointer } from '../../store/usePointer';
import { Model } from '../Model'
import { Vector3 } from 'three'
import { RigidVoxel } from './Voxel';

export const PointerGameLevel = () => {
  const voxels = usePointer(s => s.voxels);

  return (
    <>
      <Character />
      {/* <Model
        url='./island.glb'
        rigidBody
        nodeName='ground2'
        materialName='Material.001'
        position={new Vector3(-2.5, 5, -47.5)}
        rotation={new Vector3(0, -Math.PI / 2, 0)}
      /> */}
      {voxels.map((v, i) => <RigidVoxel key={i} position={v} />)}
    </>
  )
}
