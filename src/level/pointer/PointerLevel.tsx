import { ThreeEvent, useThree } from "@react-three/fiber";
import { usePointer } from "../../store/usePointer";
import { useCallback, useEffect } from "react";
import { Vector3 } from "three";
import { Ghost } from "./Ghost";
import { Voxel } from "./Voxel";

export const PointerLevel = () => {
  const voxels = usePointer(s => s.voxels);
  console.log(voxels);
  
  const setVoxels = usePointer(s => s.setVoxels);
  const setPos = usePointer(s => s.setPos);
  const setIsGhost = usePointer(s => s.setIsGhost);
  const { camera } = useThree();


  const onPointerMove = useCallback((e: ThreeEvent<PointerEvent>) => {
    if (e.intersections.length > 0) {
      const intersect = e.intersections[0];
      const position = new Vector3();
      position.copy(intersect.point).add(intersect.face.normal);
      position.divideScalar(5).floor().multiplyScalar(5).addScalar(2.5);
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
      position.divideScalar(5).floor().multiplyScalar(5).addScalar(2.5);
      setVoxels(position);
    }
  }

  useEffect(() => {
    camera.position.set( 50, 80, 130 );
  }, []);

  return (
    <>
      <gridHelper args={[100, 20]} />
      <Ghost />
      <group
        onPointerMove={onPointerMove}
        onPointerDown={onPointerDown}
      >
        {voxels.map((v, i) => <Voxel key={i} position={v} />)}
      </group>
    </>
  );
}