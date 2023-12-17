import { useTexture } from '@react-three/drei';
import { Euler, Vector3 } from 'three';

type ImageBlockProps = {
  url: string;
  scale? : number;
  position?: Vector3;
  rotation?: Vector3;
};

export const ImageBlock = ({url, scale = 2, position = new Vector3(), rotation = new Vector3()}: ImageBlockProps) => {
  const props = useTexture({map: url});
  const width = Number(props.map.source.data.width);
  const height = Number(props.map.source.data.height);

  return (
    <mesh position={position} rotation={new Euler().setFromVector3(rotation)}>
      <boxGeometry args={[width * scale / 1000, height * scale / 1000, 0.06]} />
      <meshStandardMaterial {...props} />
    </mesh>
  );
}