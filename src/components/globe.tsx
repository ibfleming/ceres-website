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

  const orbitAirplane = (
    globe: GlobeMethods | undefined,
    airplane: GLTF | undefined | null,
  ) => {
    if (globe && airplane) {
      //const originalPos = airplane.scene.getWorldPosition(new THREE.Vector3());
      //console.log("Original Position:", originalPos);
      //airplane.scene.position.setX(0).setY(0).setZ(0);
      const radius = globe.getGlobeRadius();
      const planeDistFromOrigin = radius * 1.1;
      const orbitSpeed = 0.001;

      const time = Date.now() * orbitSpeed;

      const newY = planeDistFromOrigin * Math.sin(time);
      const newX = planeDistFromOrigin * Math.cos(time);

      airplane.scene.position.set(newX, newY, 0);

      airplane.scene.up.set(0, 0, 1);

      airplane.scene.lookAt(0, 0, 0);

      airplane.scene.rotateZ(2 * Math.PI);
      airplane.scene.rotateX((3 * Math.PI) / 2);
    }
    requestAnimationFrame(() => orbitAirplane(globe, airplane));
  };

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
      console.log(
        "Globe position:",
        globe.scene().getWorldPosition(new THREE.Vector3()),
      );
      globe.controls().enableRotate = true;
      globe.controls().autoRotate = false;
      globe.controls().autoRotateSpeed = -1.75;
      globe.controls().enableDamping = true;
      globe.controls().enablePan = false;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 5, lng: -90, altitude: 2 });
    }

    /*********/

    if (globe && airplaneRef.current) {
      const airplane = airplaneRef.current.scene;

      airplane.scale.setX(50).setY(50).setZ(50);
      /*       airplane
        .rotateX((5 * Math.PI) / 4) // 5𝛑/4 = 225°
        .rotateY(-Math.PI * 2)
        .rotateZ(Math.PI / 2); */ //airplane.position.setX(defaultX).setY(0).setZ(0);
      //airplane.lookAt(0, 0, 0);
      airplane.position.set(0, globe.getGlobeRadius() * 1.1, 0);

      globe.scene().add(airplaneRef.current.scene);
    }

    /*********/

    setGlobeInit(true);
    orbitAirplane(globeRef.current, airplaneRef.current);

    /*********/
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
