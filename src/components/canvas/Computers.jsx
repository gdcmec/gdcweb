import React, { Suspense, useEffect, useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, useProgress } from '@react-three/drei';

import CanvasLoader from '../loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./room/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor="black" />
      <spotLight position={[-20, 50, 10]} angle={0} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -2, 0]}
      
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(min-width: 100vw,min-height: 100vh)');

    // set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const { progress } = useProgress();
  const orbitControlsRef = useRef();

  const handleScroll = (event) => {
    const delta = Math.sign(event.deltaY);
    const currentRotateSpeed = orbitControlsRef.current.rotateSpeed;
    const newRotateSpeed = Math.abs(delta) * 0.9;

    orbitControlsRef.current.rotateSpeed = newRotateSpeed;

    setTimeout(() => {
      orbitControlsRef.current.rotateSpeed = currentRotateSpeed;
    }, 100);
  };

  return (
    <div className="canvas-container" style={{ height: '100vh' }} onWheel={handleScroll}>
      <Canvas
        frameloop="demand"
        className="h-full"
        shadows
        // dpr={[1, 2]}
        camera={{ position: [0,0,23], fov: 35 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader progress={progress} />}>
          <OrbitControls
            ref={orbitControlsRef}
            enableZoom={true}
            enableRotate={true}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers isMobile={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ComputersCanvas;
