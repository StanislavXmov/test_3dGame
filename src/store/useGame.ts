import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export enum Phase {
  build = 'build',
  play = 'play',
}

type GameState = {
  phase: Phase;
  play: () => void;
  build: () => void;
}

export const useGame = create<GameState>()(subscribeWithSelector((set) => ({
  phase: Phase.build,
  play: () => set(() => ({phase: Phase.play})),
  build: () => set(() => ({phase: Phase.build})),
})));