"use client";

import * as THREE from "three";
import Globe from "react-globe.gl";
import React, { useEffect, useRef, useState } from "react";
import { type GlobeProps, type GlobeMethods } from "react-globe.gl";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import EarthTexture from "/public/earth-texture.webp";
import EarthBump from "/public/earth-bump.webp";
import EarthWater from "/public/earth-water.webp";
import { getDefaultConfig } from "tailwind-merge";
import { SceneNode } from "three/webgpu";
import animate from "tailwindcss-animate";

export default function GlobeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const globeRef = useRef<GlobeMethods>();
  const airplaneRef = useRef<GLTF | null>();

  const [isGlobeInit, setGlobeInit] = useState(false);
  const [globeMaterial, setGlobeMaterial] = useState(
    new THREE.MeshPhongMaterial(),
  );

  function createGlobeMaterial(material: THREE.MeshPhongMaterial) {
    return new Promise((resolve, reject) => {
      new THREE.TextureLoader().load(
        EarthWater.src,
        (texture) => {
          material.bumpScale = 20;
          material.specularMap = texture;
          material.specular = new THREE.Color("grey");
          material.shininess = 20;
          console.log("Loaded globe material.");
          resolve(setGlobeMaterial(material));
        },
        undefined,
        () => {
          reject(new Error());
        },
      );
    });
  }

  function loadAirplaneModel(): Promise<GLTF | null> {
    return new Promise((resolve, reject) => {
      new GLTFLoader().load(
        "/boeing-v2.glb",
        (gltf) => {
          console.log("Loaded airplane model.");
          resolve(gltf);
        },
        undefined,
        () => {
          reject(new Error());
        },
      );
    });
  }

  /* Globe configuration */

  const globeConfig: GlobeProps = {
    width: 360,
    height: 360,
    backgroundColor: "rgba(0, 0, 0, 0)",
    waitForGlobeReady: true,
    animateIn: true,
    globeImageUrl: EarthTexture.src,
    bumpImageUrl: EarthBump.src,
    showGraticules: false,
    showAtmosphere: false,
    atmosphereColor: "white",
    atmosphereAltitude: 0.085,
    globeMaterial: globeMaterial,
    rendererConfig: { antialias: true, alpha: true },
    enablePointerInteraction: false,
    showGlobe: false,
  };

  function initGlobe() {
    const globe = globeRef.current;

    if (!globe) {
      new Error("Globe not initialized!");
    }

    /*********/

    if (globe) {
      globe.controls().enableRotate = true;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -1.75;
      globe.controls().enableDamping = true;
      globe.controls().enablePan = false;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 5, lng: -90, altitude: 2 });
    }

    /*********/

    if (globe && airplaneRef.current) {
      const airplane = airplaneRef.current.scene;
      const radius = globe.getGlobeRadius();

      airplane.scale.setX(50).setY(50).setZ(50);
      airplane
        .rotateX((5 * Math.PI) / 4) // Math.PI = 180deg
        .rotateY(-Math.PI * 2)
        .rotateZ(Math.PI / 2);
      airplane.position
        .setX(-(radius * 1.1))
        .setY(0)
        .setZ(0);

      globe.scene().add(airplaneRef.current.scene);
      console.log("Valid airplane reference!");
    }

    /*********/

    console.log("Globe initialized!");
    setGlobeInit(true);
  }

  if (typeof window !== "undefined") {
    return (
      <>
        <Globe
          ref={globeRef}
          {...globeConfig}
          showGlobe={isGlobeInit}
          onGlobeReady={async () => {
            airplaneRef.current = await loadAirplaneModel();
            await createGlobeMaterial(globeMaterial);
            initGlobe();
          }}
        />
        {isGlobeInit && children}
      </>
    );
  } else {
    return <div />;
  }
}
