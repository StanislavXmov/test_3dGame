import { Physics } from '@react-three/rapier';
import { Ground } from '../level/Ground';
import { Character } from './Character';
import { DynamicPlatform } from '../level/DynamicPlatform';
import { Vector3 } from 'three';
import { Model } from '../level/Model';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <Character />

      <Model
        url='./island.glb'
        rigidBody
        nodeName='ground2'
        materialName='Material.001'
        position={new Vector3(0, 0, 0)}
        rotation={new Vector3(0, -Math.PI / 2, 0)}
      />
    </Physics>
  );
};
