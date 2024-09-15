"use client";

import * as THREE from "three";
import React, { useRef, useState } from "react";
import { type GlobeProps, type GlobeMethods } from "react-globe.gl";

import EarthTexture from "/public/earth-texture.webp";
import EarthBump from "/public/earth-bump.webp";
import EarthWater from "/public/earth-water.webp";
import Globe from "react-globe.gl";

export default function GlobeComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  const globeRef = useRef<GlobeMethods>();

  const [isGlobeInit, setGlobeInit] = useState(false);
  const [globeMaterial, setGlobeMaterial] = useState(
    new THREE.MeshPhongMaterial(),
  );

  function createGlobeMaterial(material: THREE.MeshPhongMaterial) {
    new THREE.TextureLoader().load(EarthWater.src, (texture) => {
      material.bumpScale = 10;
      material.specularMap = texture;
      material.specular = new THREE.Color("grey");
      material.shininess = 15;
      setGlobeMaterial(material);
    });
  }

  /* Globe configuration */

  const globeConfig: GlobeProps = {
    width: 384,
    height: 384,
    backgroundColor: "rgba(0, 0, 0, 0)",
    waitForGlobeReady: true,
    animateIn: true,
    globeImageUrl: EarthTexture.src,
    bumpImageUrl: EarthBump.src,
    showGraticules: false,
    showAtmosphere: true,
    atmosphereColor: "white",
    atmosphereAltitude: 0.085,
    globeMaterial: globeMaterial,
    rendererConfig: { antialias: true, alpha: true },
    enablePointerInteraction: false,
  };

  function initGlobe() {
    const globe = globeRef.current;

    if (!globe) {
      new Error("Globe not initialized!");
    }

    /*********/

    createGlobeMaterial(globeMaterial);

    /*********/

    if (globe) {
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -1.75;
      globe.controls().enableDamping = true;
      globe.controls().enablePan = false;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 0, lng: 0, altitude: 2 });
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
          onGlobeReady={() => initGlobe()}
        />
        {isGlobeInit && children}
      </>
    );
  } else {
    return <div />;
  }
}
