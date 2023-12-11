import { Canvas } from '@react-three/fiber';
import styles from './App.module.scss';
import { Perf } from 'r3f-perf';
import { Environment, OrbitControls } from '@react-three/drei';
import { Light } from './environment/Light';
import { Scene } from './components/Scene';
import { useDevice } from './hooks/useDevice';
import { Joystick } from './components/Joystick';

const dev = false;

function App() {
  const isMobile = useDevice();
  
  return (
    <div className={styles.app}>
      {isMobile && <Joystick />}
      <Canvas
        shadows
        onPointerDown={(e) => {
          if (e.pointerType === 'mouse') {
            (e.target as HTMLCanvasElement).requestPointerLock();
          }
        }}
      >
          {dev && <Perf position="top-left" />}
          <Environment
            files="./test.hdr"
            background
            blur={0.5}
          />
          <Light />
          <Scene />
          {/* test scene */}
          {/* <OrbitControls /> */}
      </Canvas>
    </div>
  );
}

export default App;
