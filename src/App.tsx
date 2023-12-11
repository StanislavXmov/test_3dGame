import { Canvas } from '@react-three/fiber';
import styles from './App.module.scss';
import { Perf } from 'r3f-perf';
import { Environment, OrbitControls } from '@react-three/drei';
import { Light } from './environment/Light';
import { Scene } from './components/Scene';


function App() {
  
  return (
    <div className={styles.app}>
      <Canvas
        shadows
        onPointerDown={(e) => {
          if (e.pointerType === 'mouse') {
            (e.target as HTMLCanvasElement).requestPointerLock();
          }
        }}
      >
          <Perf position="top-left" />
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
