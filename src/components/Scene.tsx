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
      <Model
        url='./flower.glb'
        nodeName='mesh'
        materialName='Material.001'
        rigidBody={false}
        rotation={new Vector3(Math.PI / 2, -Math.PI / 8, 0)}
        position={new Vector3(-5.4, 6, -24)}
      />
      <Model
        url='./stand.glb'
        nodeName='mesh'
        materialName='Material'
        rigidBody
        rotation={new Vector3(0, -Math.PI / 2, 0)}
        position={new Vector3(2, 0, -4)}
      />
      <Model
        url='./stand.glb'
        nodeName='mesh'
        materialName='Material'
        rigidBody
        rotation={new Vector3(0, -Math.PI / 2, 0)}
        position={new Vector3(-2, 0, -12)}
      />
      <Model
        url='./stand.glb'
        nodeName='mesh'
        materialName='Material'
        rigidBody
        rotation={new Vector3(0, -Math.PI / 2, 0)}
        position={new Vector3(3, 0, -20)}
      />
      <Model
        url='./standMin.glb'
        nodeName='mesh'
        materialName='Material'
        rigidBody
        rotation={new Vector3(0, Math.PI / 4, 0)}
        position={new Vector3(-4, 0, -16)}
      />
    </Physics>
  );
};
