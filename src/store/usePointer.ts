import { Vector3 } from "three";
import { create } from "zustand";

interface VoxelsState {
  pos: Vector3;
  setPos: (v: Vector3) => void;
  isGhost: boolean;
  setIsGhost: (v: boolean) => void;
  voxels: Vector3[];
  setVoxels: (v: Vector3) => void;
  endVoxel: Vector3;
  setEnd: (v: Vector3) => void;
}

export const startPoint = new Vector3(-1.25, 1.25, -50 + 1.25);
export const endPoint = new Vector3(-1.25 + 2.5, 1.25, -50 + 1.25 + 2.5);
// export const endPoint = new Vector3(1.25, 1.25, 50 - 1.25);
export const endPointPosition = new Vector3(endPoint.x, endPoint.y + 2.5, endPoint.z);
export const startPlayerPoint = new Vector3(startPoint.x, startPoint.y + 2.5, startPoint.z);

export const usePointer = create<VoxelsState>()(set => ({
  endVoxel: endPoint,
  setEnd: (v) => set(() => ({endVoxel: v})),
  voxels: [startPoint],
  setVoxels: (v) => set(state => ({voxels: [...state.voxels, v]})),
  pos: new Vector3(),
  setPos: (v) => set(() => ({pos: v})),
  isGhost: false,
  setIsGhost: (v) => set(() => ({isGhost: v})),
}));