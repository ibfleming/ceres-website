"use client";

import * as THREE from "three";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { type GlobeProps, type GlobeMethods } from "react-globe.gl";

import EarthTexture from "/public/earth-texture.webp";
import EarthBump from "/public/earth-bump.webp";
import EarthWater from "/public/earth-water.webp";
import { useMutableForwardRef } from "~/lib/utils";

const Globe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
});

function createGlobeMaterial(material: THREE.MeshPhongMaterial) {
  new THREE.TextureLoader().load(EarthWater.src, (texture) => {
    material.bumpScale = 10;
    material.specularMap = texture;
    material.specular = new THREE.Color("grey");
    material.shininess = 15;
  });
}

/* function createCloudMaterial() {} */

const GlobeComponent = React.forwardRef<
  GlobeMethods | undefined,
  { children: React.ReactNode }
>(({ children }, forwardedRef) => {
  const globeRef = useMutableForwardRef(forwardedRef);
  const [globeMaterial, setGlobeMaterial] = useState(
    new THREE.MeshPhongMaterial(),
  );
  const [isGlobeInit, setGlobeInit] = useState(false);

  useEffect(() => {
    console.log(globeRef);
    createGlobeMaterial(globeMaterial);
  }, [globeRef, globeMaterial]);

  const globeConfig: GlobeProps = {
    width: 320,
    height: 320,
    backgroundColor: "rgba(0, 0, 0, 0)",
    waitForGlobeReady: true,
    animateIn: true,
    globeImageUrl: EarthTexture.src,
    bumpImageUrl: EarthBump.src,
    showGraticules: false,
    showAtmosphere: true,
    atmosphereAltitude: 0.125,
    globeMaterial: globeMaterial,
    rendererConfig: { antialias: true, alpha: true },
    enablePointerInteraction: false,
  };

  function initializeGlobe() {
    console.log("Globe initialized!");
    setGlobeInit(true);
  }

  return (
    <>
      <Globe ref={globeRef} {...globeConfig} onGlobeReady={initializeGlobe} />
      {isGlobeInit && children}
    </>
  );
});

// Set display name for easier debugging
GlobeComponent.displayName = "GlobeComponent";

export default GlobeComponent;
