import { ThreeEvent, useThree } from "@react-three/fiber";
import { usePointer } from "../../store/usePointer";
import { useCallback, useEffect } from "react";
import { Vector3 } from "three";
import { Ghost } from "./Ghost";
import { Voxel } from "./Voxel";

export const PointerLevel = () => {
  const voxels = usePointer(s => s.voxels);
  // console.log(voxels);
  
  const endVoxel = usePointer(s => s.endVoxel);
  const startVoxel = usePointer(s => s.startVoxel);
  const setVoxels = usePointer(s => s.setVoxels);
  const setPos = usePointer(s => s.setPos);
  const setIsGhost = usePointer(s => s.setIsGhost);
  const { camera } = useThree();


  const onPointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (e.intersections.length > 0) {
      const intersect = e.intersections[0];
      const position = new Vector3();
      position.copy(intersect.point).add(intersect.face.normal);
      position.divideScalar(2.5).floor().multiplyScalar(2.5).addScalar(1.25);
      setPos(position);
      setIsGhost(true);
    }
  }, []);

  const onPointerDown = (e: ThreeEvent<PointerEvent>) => {
    e.stopPropagation();
    if (e.intersections.length > 0) {
      const intersect = e.intersections[0];
      const position = new Vector3();
      position.copy(intersect.point).add(intersect.face.normal);
      position.divideScalar(2.5).floor().multiplyScalar(2.5).addScalar(1.25);
      
      if (
          position.equals(new Vector3(startVoxel.x, startVoxel.y + 2.5, startVoxel.z)) 
          || position.equals(new Vector3(endVoxel.x, endVoxel.y + 2.5, endVoxel.z))
        ) {
        return;
      }
      setVoxels(position);
    }
  }

  useEffect(() => {
    camera.parent = null;
    camera.position.set(50, 60, 50);
  }, []);

  return (
    <>
      <gridHelper args={[100, 40]} />
      <Ghost />
      <group
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
      >
        <Voxel position={endVoxel} />
        <Voxel position={startVoxel} />
        {voxels.map((v, i) => <Voxel key={i} position={v} />)}
      </group>
    </>
  );
}