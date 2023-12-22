import { Vector3 } from "three";
import { usePointer } from "../../store/usePointer";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { useGLTF } from "@react-three/drei";
import { useGame } from "../../store/useGame";
import { useDevice } from "../../hooks/useDevice";

const n = 2.5;

export const Voxel = ({position}: {position: Vector3}) => {
  const setIsGhost = usePointer(s => s.setIsGhost);

  const onPointerLeave = () => {
    setIsGhost(false);
  }

  return (
    <mesh 
      position={position}
      onPointerLeave={onPointerLeave}
    >
      <boxGeometry args={[n, n, n]} />
      <meshStandardMaterial color={'#5E6A81'} />
    </mesh>
  );
}

interface SceneModel extends GLTF {
  nodes: any;
  materials: any;
}

export const RigidVoxel = ({position}: {position: Vector3}) => {
  const {nodes, materials} = useGLTF('./cube.glb') as SceneModel;
  
  return (
    <RigidBody 
      type="fixed" 
      colliders="cuboid" 
      position={position}
    >
      <mesh castShadow receiveShadow geometry={nodes.Cube.geometry} material={materials['Material']} />
    </RigidBody>
  );
}

export const RigidEndVoxel = ({position}: {position: Vector3}) => {
  const isMobile = useDevice();
  const buildPhase = useGame(s => s.build);
  const clearVoxel = usePointer(s => s.clearVoxel);
  
  return (
    <RigidBody 
      type="fixed" 
      colliders="cuboid" 
      position={position}
    >
      <CuboidCollider
        position={[0, 1.25, 0]}
        args={[1, 1, 1]}
        sensor
        onIntersectionEnter={(e) => {
          console.log('ENTER', e);
          if (!isMobile) {
            document.exitPointerLock();
          }
          clearVoxel();
          buildPhase();
        }}
      />
    </RigidBody>
  );
}