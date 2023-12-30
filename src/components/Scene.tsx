import { Physics } from '@react-three/rapier';
import { Euler, Vector3 } from 'three';
import { Model } from '../level/Model';
import { Hangar } from '../level/Hangar';
import { canvasList } from '../level/data';
import { ImageBlock } from '../level/ImageBlock';
import { Text } from '@react-three/drei';
import { VRPlayer } from './VRPlayer';
import { Suspense } from 'react';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <VRPlayer />
      <Text 
        position={[0, 4, 16]}
        rotation={new Euler().setFromVector3(new Vector3(0, Math.PI, 0))}
        color="black" 
        anchorX="center" 
        anchorY="middle"
        strokeColor={'black'}
        fillOpacity={0}
        strokeWidth={'0.6%'}
        fontSize={2}
      >
        Exhibition &#60;People&#62;
      </Text>
      <Text 
        position={[5, 2.6, 14]}
        rotation={new Euler().setFromVector3(new Vector3(0, Math.PI, 0))}
        color="black" 
        anchorX="center" 
        anchorY="middle"
        strokeColor={'black'}
        fillOpacity={0}
        strokeWidth={'0.6%'}
        fontSize={1}
      >
        by xmov
      </Text>
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
        position={new Vector3(-5.4, 5.5, -24)}
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
      <Model
        url='./xmov.glb'
        nodeName='Cube'
        materialName='Material'
        rigidBody
        rotation={new Vector3(0, -Math.PI, 0)}
        position={new Vector3(0, 0, -25.96)}
      />
      <Suspense>
        {canvasList.map((c, i) => (
          <ImageBlock
            key={i}
            url={c.url}
            position={c.position}
            rotation={c.rotation}
            scale={c.scale}
          />
        ))}
      </Suspense>
    </Physics>
  );
};
