import { ThreeEvent, useThree } from "@react-three/fiber";
import { endPointPosition, startPlayerPoint, usePointer } from "../../store/usePointer";
import { useCallback, useEffect } from "react";
import { Vector3 } from "three";
import { Ghost } from "./Ghost";
import { Voxel } from "./Voxel";

export const PointerLevel = () => {
  const voxels = usePointer(s => s.voxels);
  // console.log(voxels);
  
  const endVoxel = usePointer(s => s.endVoxel);
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
      
      if (position.equals(startPlayerPoint) || position.equals(endPointPosition)) {
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
        {voxels.map((v, i) => <Voxel key={i} position={v} />)}
      </group>
    </>
  );
}