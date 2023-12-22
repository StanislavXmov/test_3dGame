import { Vector3 } from "three";
import { create } from "zustand";

const randomNumber = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
}

const randomRoundNumber = (min: number, max: number, array: number[]): number => {
  let r = Math.round(randomNumber(min, max));
  if (array && array.includes(r)) {
    return randomRoundNumber(min, max, array);
  } else {
    return r;
  }
}

const setX = () => {
  // const n = randomRoundNumber(-38, 38, []);
  const n = randomRoundNumber(-18, 18, []);
  if (n % 2 === 0) {
    if (n >= 0) {
      return n * 1.25 + 1.25;
    }
    return n * 1.25 - 1.25;
  }
  return n * 1.25;
}

const setY = () => {
  const n = randomRoundNumber(0, 18, []);
  if (n % 2 === 0) {
    return n * 1.25 + 1.25;
  }
  return n * 1.25;
}

const setEndPoint = () => new Vector3(setX(), setY(), 20 - 1.25);
// const setEndPoint = () => new Vector3(-1.25 + 2.5, 1.25, -50 + 1.25 + 2.5);
const setStartPoint = () => new Vector3(setX(), setY(), -20 + 1.25);
// const setStartPoint = () => new Vector3(-1.25, 1.25, -50 + 1.25);

interface VoxelsState {
  pos: Vector3;
  setPos: (v: Vector3) => void;
  isGhost: boolean;
  setIsGhost: (v: boolean) => void;
  voxels: Vector3[];
  setVoxels: (v: Vector3) => void;
  clearVoxel: () => void;
  endVoxel: Vector3;
  setEnd: (v: Vector3) => void;
  startVoxel: Vector3;
  setStart: (v: Vector3) => void;
}

// export const startPoint = new Vector3(-1.25, 1.25, -50 + 1.25);
// export const endPoint = new Vector3(-1.25 + 2.5, 1.25, -50 + 1.25 + 2.5);
// export const endPoint = new Vector3(setX(), setY(), 50 - 1.25);
// export const endPointPosition = new Vector3(endPoint.x, endPoint.y + 2.5, endPoint.z);
// export const startPlayerPoint = new Vector3(startPoint.x, startPoint.y + 2.5, startPoint.z);

export const usePointer = create<VoxelsState>()(set => ({
  startVoxel: setStartPoint(),
  setStart: (v) => set(() => ({startVoxel: setStartPoint()})),
  endVoxel: setEndPoint(),
  setEnd: (v) => set(() => ({endVoxel: setEndPoint()})),
  voxels: [],
  setVoxels: (v) => set(state => ({voxels: [...state.voxels, v]})),
  clearVoxel: () => set(() => ({voxels: [], startVoxel: setStartPoint(), endVoxel: setEndPoint()})),
  pos: new Vector3(),
  setPos: (v) => set(() => ({pos: v})),
  isGhost: false,
  setIsGhost: (v) => set(() => ({isGhost: v})),
}));