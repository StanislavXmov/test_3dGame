import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import { Euler, Vector3 } from 'three';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

type ModelProps = {
  url: string;
  rigidBody: boolean;
  nodeName: string;
  materialName: string;
  position?: Vector3;
  rotation?: Vector3;
  scale?: Vector3;

};

interface Model3d extends GLTF {
  nodes: any;
  materials: any;
}

export const Model = ({
  url,
  rigidBody,
  nodeName,
  materialName,
  position = new Vector3(),
  rotation = new Vector3(),
  scale = new Vector3(1, 1, 1),
}: ModelProps) => {
  const {nodes, materials} = useGLTF(url) as Model3d;
  
  if (rigidBody) {
    return (
      <RigidBody 
        type="fixed" 
        colliders="trimesh" 
        position={position} 
        rotation={new Euler().setFromVector3(rotation)}
      >
        <group dispose={null}>
          <group>
            <mesh 
              castShadow 
              receiveShadow 
              geometry={nodes[nodeName].geometry} 
              material={materials[materialName]} 
            />
          </group>
        </group>
      </RigidBody>
    );
  }
  
  return (
    <group dispose={null}>
      <group>
        <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes[nodeName].geometry} 
        material={materials[materialName]} 
        scale={scale}
        position={position}
        rotation={new Euler().setFromVector3(rotation)}
        />
      </group>
    </group>
  );
}
