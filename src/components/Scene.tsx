import { Physics } from '@react-three/rapier';
// import { Ground } from '../level/Ground';
import { Character } from './Character';
// import { DynamicPlatform } from '../level/DynamicPlatform';
import { Vector3 } from 'three';
import { Model } from '../level/Model';
import { Hangar } from '../level/Hangar';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <Character />
      <Hangar />
      <Model
        url='./logo.glb'
        nodeName='Layer_001'
        materialName='Material'
        rigidBody={false}
        position={new Vector3(0, 7.2, 6.3)}
        scale={new Vector3(4, 4, 4)}
      />
      <Model
        url='./tree.glb'
        nodeName='mesh'
        materialName='Material'
        rigidBody
        position={new Vector3(2, 0, -9)}
      />
      <Model
        url='./plant.glb'
        nodeName='mesh'
        materialName='Material.001'
        rigidBody
        position={new Vector3(-3, 0, 0)}
      />
    </Physics>
  );
};
