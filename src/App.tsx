import { Canvas } from '@react-three/fiber';
import styles from './App.module.scss';
import { Perf } from 'r3f-perf';
import { Environment } from '@react-three/drei';
import { Light } from './environment/Light';
import { Scene } from './components/Scene';
import { Controllers, Hands, VRButton, XR } from '@react-three/xr';

const dev = false;

function App() {
  
  return (
    <div className={styles.app}>
      <VRButton />
      <Canvas
        shadows
      >
        {dev && <Perf position="top-left" />}
        <XR>
          <Controllers />
          <Hands />
          <Environment
            files="./test.hdr"
            background
            blur={0.5}
          />
          <Light />
          <Scene />
        </XR>
      </Canvas>
    </div>
  );
}

export default App;
