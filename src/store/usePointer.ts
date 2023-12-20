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

export const usePointer = create<VoxelsState>()(set => ({
  voxels: [new Vector3(2.5, 2.5, 47.5), new Vector3(-2.5, 2.5, -47.5)],
  setVoxels: (v) => set(state => ({voxels: [...state.voxels, v]})),
  pos: new Vector3(),
  setPos: (v) => set(() => ({pos: v})),
  isGhost: false,
  setIsGhost: (v) => set(() => ({isGhost: v})),
}));