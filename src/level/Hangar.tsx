import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { RigidBody } from '@react-three/rapier';

interface SceneModel extends GLTF {
  nodes: any;
  materials: any;
}

export const Hangar = () => {
  const {nodes, materials} = useGLTF('./hangar.glb') as SceneModel;
  
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group dispose={null}>
        <group>
          <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material']} />
        </group>
      </group>
    </RigidBody>
  )
}

useGLTF.preload('./hangar.glb');