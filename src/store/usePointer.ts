import { Vector3 } from "three";
import { create } from "zustand";

interface VoxelsState {
  pos: Vector3;
  setPos: (v: Vector3) => void;
  isGhost: boolean;
  setIsGhost: (v: boolean) => void;
  voxels: Vector3[];
  setVoxels: (v: Vector3) => void;
}

export const startPoint = new Vector3(-1.25, 1.25, -50 + 1.25);
export const startPlayerPoint = new Vector3(startPoint.x, startPoint.y + 5, startPoint.z);

export const usePointer = create<VoxelsState>()(set => ({
  voxels: [new Vector3(1.25, 1.25, 50 - 1.25), startPoint],
  setVoxels: (v) => set(state => ({voxels: [...state.voxels, v]})),
  pos: new Vector3(),
  setPos: (v) => set(() => ({pos: v})),
  isGhost: false,
  setIsGhost: (v) => set(() => ({isGhost: v})),
}));