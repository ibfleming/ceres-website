"use client";

import * as THREE from "three";
import Globe from "react-globe.gl";
import React, { useRef, useState } from "react";
import { type GlobeProps, type GlobeMethods } from "react-globe.gl";
import { type GLTF, GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

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
          /* console.log("Loaded globe material."); */
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
        "/boeing.glb",
        (gltf) => {
          /* console.log("Loaded airplane model."); */
          gltf.scene.visible = false;
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
      const radius = globe.getGlobeRadius();
      const planeDistFromOrigin = radius * 1.125;
      const orbitSpeed = 75 / 100000; // Change the 75 to adjust the speed

      const time = Date.now() * orbitSpeed;

      const newY = planeDistFromOrigin * Math.sin(time);
      const newX = planeDistFromOrigin * Math.cos(time);

      airplane.scene.position.set(newX, newY, 0);
      airplane.scene.up.set(0, 0, 1);
      airplane.scene.lookAt(0, 0, 0);
      airplane.scene.rotateX((3 * Math.PI) / 2);
      airplane.scene.rotateZ(2 * Math.PI);
    }
    requestAnimationFrame(() => orbitAirplane(globe, airplane));
  };

  /* GLOBE CONFIGURATION */

  const globeConfig: GlobeProps = {
    width: 360,
    height: 360,
    backgroundColor: "rgba(0, 0, 0, 0)",
    globeMaterial: globeMaterial,
    waitForGlobeReady: true,
    animateIn: true,
    globeImageUrl: EarthTexture.src,
    bumpImageUrl: EarthBump.src,
    atmosphereColor: "white",
    atmosphereAltitude: 0.085,
    rendererConfig: { antialias: true, alpha: true },
    enablePointerInteraction: false,
  };

  function initGlobe() {
    const globe = globeRef.current;
    const airplane = airplaneRef.current;

    /*     if (!globe) {
      new Error("Globe not initialized!");
    } */

    if (globe) {
      globe.controls().enableRotate = true;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = -1.75; // Going backwards
      globe.controls().enableDamping = true;
      globe.controls().enablePan = false;
      globe.controls().enableZoom = false;
      globe.pointOfView({ lat: 5, lng: -100, altitude: 2 });
    }

    if (globe && airplane) {
      airplane.scene.scale.setX(50).setY(50).setZ(50);
      globe.scene().add(airplane.scene);
      airplane.scene.visible = true;
    }

    setGlobeInit(true);
    orbitAirplane(globeRef.current, airplaneRef.current);
  }

  if (typeof window !== "undefined") {
    return (
      <>
        <span className="cursor-move">
          <Globe
            ref={globeRef}
            {...globeConfig}
            showAtmosphere={isGlobeInit}
            showGraticules={isGlobeInit}
            showGlobe={isGlobeInit}
            onGlobeReady={async () => {
              airplaneRef.current = await loadAirplaneModel();
              await createGlobeMaterial(globeMaterial);
              initGlobe();
            }}
          />
        </span>

        {isGlobeInit && children}
      </>
    );
  } else {
    return (
      <span className="cursor-move">
        <div />
      </span>
    );
  }
}
