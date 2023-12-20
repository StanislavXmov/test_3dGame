import { Vector3 } from "three";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { startPoint } from "./usePointer";

interface PositionState {
  position: Vector3;
  setPosition: (v: Vector3) => void;
}

export const usePosition = create<PositionState>()(subscribeWithSelector(set => ({
  position: new Vector3(startPoint.x, startPoint.y + 2.25, startPoint.z),
  setPosition: (v) => set((() => ({position: v}))),
})));