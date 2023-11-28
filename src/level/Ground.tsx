import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';
import { RigidBody } from '@react-three/rapier';

interface SceneModel extends GLTF {
  nodes: any;
  materials: any;
}

export const Ground = () => {
  const {nodes, materials} = useGLTF('/ground2.glb') as SceneModel;
  
  return (
    <RigidBody type="fixed" colliders="trimesh">
      <group dispose={null}>
        <group>
          <mesh castShadow receiveShadow geometry={nodes.Cylinder.geometry} material={materials['Material.003']} />
        </group>
      </group>
    </RigidBody>
  )
}