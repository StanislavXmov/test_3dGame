import { Physics } from '@react-three/rapier';
import { Ground } from '../level/Ground';
import { Character } from './Character';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <Character />
      <Ground />
    </Physics>
  );
};
