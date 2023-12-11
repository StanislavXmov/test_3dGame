import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { RapierRigidBody, RigidBody } from '@react-three/rapier';
import { Vector3 } from 'three';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

interface SceneModel extends GLTF {
  nodes: any;
  materials: any;
}

type DynamicPlatformProps = {
  position: Vector3;
  axis?: 'x' | 'z';
  dir?: Vector3;
}

const dir = new Vector3(5, 0, 5);

export const DynamicPlatform = ({position, axis = 'x', dir}: DynamicPlatformProps) => {
  const {nodes, materials} = useGLTF('./island.glb') as SceneModel;
  const sideMovePlatformRef = useRef<RapierRigidBody>();

  let time = null;

  useFrame((state) => {
    time = state.clock.elapsedTime;

    if (dir) {
      sideMovePlatformRef.current?.setNextKinematicTranslation(position.add(new Vector3(
        dir.x * Math.sin(time / 2) * 0.02,
        dir.y * Math.sin(time / 2) * 0.02,
        dir.z * Math.sin(time / 2) * 0.02,
      )));
    } else {
      sideMovePlatformRef.current?.setNextKinematicTranslation({
        x: axis === 'x' ? position.x + Math.sin(time / 2) * 10 : position.x,
        y: position.y,
        z: axis === 'z' ? position.z + Math.sin(time / 2) * 10 : position.z,
      });
    }
  });

  return (
    <RigidBody 
      type="kinematicPosition"
      ref={sideMovePlatformRef}
      colliders="trimesh" 
      position={position}
    >
      <group dispose={null}>
        <group>
          <mesh 
            castShadow 
            receiveShadow 
            geometry={nodes.ground2.geometry} 
            material={materials['Material.001']} 
          />
        </group>
      </group>
    </RigidBody>
  );
};

useGLTF.preload('./island.glb');
