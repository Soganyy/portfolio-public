import { Canvas } from "@react-three/fiber";

type Props = {
  children: React.ReactNode;
};

export const Scene = ({ children }: Props) => {
  return (
    <Canvas
      orthographic={true}
      shadows={true}
      camera={{
        up: [0, 0, 1],
        position: [300, -300, 300],
      }}
    >
      <ambientLight />
      <directionalLight position={[-100, -100, 200]} />
      {children}
    </Canvas>
  );
};
