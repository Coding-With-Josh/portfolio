import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

export function Scene() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas>
        <Stars radius={100} depth={50} count={5000} factor={4} />
        <ambientLight intensity={0.5} />
      </Canvas>
    </div>
  );
}