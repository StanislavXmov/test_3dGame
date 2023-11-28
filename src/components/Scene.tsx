import { Physics } from '@react-three/rapier';
import { Ground } from '../level/Ground';

export const Scene = () => {
  return (
    <Physics timeStep="vary">
      <Ground />
    </Physics>
  );
};
