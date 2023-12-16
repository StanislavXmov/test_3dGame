import { Physics } from '@react-three/rapier';
import { Ground } from '../level/Ground';
import { Character } from './Character';
import { DynamicPlatform } from '../level/DynamicPlatform';
import { Vector3 } from 'three';
import { Model } from '../level/Model';
import { Hangar } from '../level/Hangar';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <Character />
      <Hangar />
    </Physics>
  );
};
