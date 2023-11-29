import { Physics } from '@react-three/rapier';
import { Ground } from '../level/Ground';
import { CharacterModel } from './CharacterModel';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <CharacterModel />
      <Ground />
    </Physics>
  );
};
