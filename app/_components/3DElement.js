"use client";

import React, { useRef, useEffect } from "react";
import { Canvas, useThree, extend, useFrame } from "@react-three/fiber";
import { OrbitControls as OrbitControlsImpl } from "three/examples/jsm/controls/OrbitControls";
import { useSpring, a } from "@react-spring/three";
import { Shape, ExtrudeGeometry, MeshPhysicalMaterial, DoubleSide } from "three";
import { usePathname } from "next/navigation";

// Extend will make OrbitControls available in JSX
extend({ OrbitControlsImpl });

function OrbitControls() {
  const { camera, gl } = useThree();
  const controls = useRef();
  useEffect(() => {
    controls.current.update();
  });
  return <orbitControlsImpl ref={controls} args={[camera, gl.domElement]} />;
}

function RoundedRectangle({ width, height, radius, mousePosition }) {
  const meshRef = useRef();
  const path = usePathname();
  let color = "#BDFFC2";

  // Define a rounded rectangle shape using THREE.Shape
  const createRoundedRectShape = (width, height, radius) => {
    const shape = new Shape();
    const x = -width / 2;
    const y = -height / 2;

    shape.moveTo(x + radius, y);
    shape.lineTo(x + width - radius, y);
    shape.absarc(x + width - radius, y + radius, radius, Math.PI * 1.5, 0, false);
    shape.lineTo(x + width, y + height - radius);
    shape.absarc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5, false);
    shape.lineTo(x + radius, y + height);
    shape.absarc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI, false);
    shape.lineTo(x, y + radius);
    shape.absarc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5, false);

    return shape;
  };

  const shape = createRoundedRectShape(width, height, radius);

  // Add extrude settings
  const extrudeSettings = {
    depth: 0.25, // Adjust depth to control thickness
    bevelEnabled: true,
    bevelThickness: 0.05,
    bevelSize: 0.05,
    bevelSegments: 64,
    curveSegments: 128,
  };

  if (path.includes("solutions")) {
    color = "#EDD5FF";
  }

  return (
    <mesh ref={meshRef} position={[0, -1, 0]}>
      {/* Extruded geometry with bevel */}
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} clearcoat={0.8} clearcoatRoughness={0.1} reflectivity={0.9} />
    </mesh>
  );
}

function ExtrudedRing({ innerRadius, outerRadius, thickness }) {
  const shape = new Shape();
  const path = usePathname();
  let color = "#BDFFC2";

  // Define the outer circle of the ring
  shape.absarc(0, 0, outerRadius, 0, Math.PI * 2, false);

  // Create a hole in the middle of the shape to form the ring
  const holePath = new Shape();
  holePath.absarc(0, 0, innerRadius, 0, Math.PI * 2, true);
  shape.holes.push(holePath);

  // Define the extrude settings
  const extrudeSettings = {
    depth: thickness, // Thickness of the extrusion
    bevelEnabled: false,
    curveSegments: 64,
  };

  if (path.includes("solutions")) {
    color = "#EDD5FF";
  }

  return (
    <mesh position={[0, 1.5, 0]} castShadow receiveShadow>
      {/* Apply ExtrudeGeometry to the shape */}
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshPhysicalMaterial
        color={color}
        metalness={0.9}
        roughness={0.2}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        reflectivity={0.9}
        side={DoubleSide} // Use DoubleSide for rendering both sides of the ring
      />
    </mesh>
  );
}

function TransparentBox({ styleConfig }) {
  const groupRef = useRef();
  const pathname = usePathname();

  // Use spring for smoother movement based on mouse coordinates
  const [{ rotation }, setRotation] = useSpring(() => ({
    rotation: [0, 0, 0],
    config: { mass: 2, tension: 150, friction: 40 },
  }));

  // Update rotation on mouse move
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;

      const xRotation = (clientY / innerHeight - 0.5) * 0.5;
      const yRotation = (clientX / innerWidth - 0.5) * 0.5;
      setRotation({ rotation: [xRotation, yRotation, 0] });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [setRotation]);

  return (
    <div className={styleConfig}>
      <Canvas shadows>
        {/* Ambient light for general scene lighting */}
        <ambientLight intensity={4} />

        {/* Directional light from front */}
        <directionalLight position={[0, 5, 10]} intensity={1.5} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />

        {/* Group of 3D elements */}
        <a.group ref={groupRef} rotation={rotation}>
          {/* Torus (Ring) */}
          <ExtrudedRing innerRadius={1} outerRadius={1.5} thickness={0.25} />

          {/* Box (Bar) with curved corners */}
          <RoundedRectangle width={3} height={0.5} radius={0.1} />
        </a.group>

        {/* Camera Controls */}
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default TransparentBox;
