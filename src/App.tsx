import { Canvas } from '@react-three/fiber';
import styles from './App.module.scss';
import { Perf } from 'r3f-perf';
import { Environment, OrbitControls } from '@react-three/drei';
import { Light } from './environment/Light';
import { Scene } from './components/Scene';
import { useDevice } from './hooks/useDevice';
import { Joystick } from './components/Joystick';
import { Phase, useGame } from './store/useGame';

const dev = true;

function App() {
  const isMobile = useDevice();

  const phase = useGame(s => s.phase);
  const playPhase = useGame(s => s.play);
  const buildPhase = useGame(s => s.build);
  
  return (
    <div className={styles.app}>
      <nav className={styles.nav}>
        <button onClick={() => buildPhase()}>Build</button>
        <button onClick={() => playPhase()}>Play</button>
      </nav>
      {isMobile && <Joystick />}
      <Canvas
        shadows
        onPointerDown={(e) => {
          if (phase === Phase.build) {
            return;
          }
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
          {phase === Phase.build && <OrbitControls />}
      </Canvas>
    </div>
  );
}

export default App;
