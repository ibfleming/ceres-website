// Globe.tsx

"use client";

import dynamic from "next/dynamic";
import React, { type ForwardedRef, forwardRef } from "react";
import { type GlobeProps, type GlobeMethods } from "react-globe.gl";

import EarthTexture from "/public/earth-texture.webp";
import EarthBump from "/public/earth-bump.webp";
import EarthWater from "/public/earth-water.webp";

const GlobeDynamic = dynamic(
  () => import("react-globe.gl").then((mod) => mod.default),
  {
    ssr: false,
    /* loading: () => <p>Loading...</p>, */
  },
);

const Globe = forwardRef(
  (props: GlobeProps, ref: ForwardedRef<GlobeMethods | undefined>) => {
    return <GlobeDynamic {...props} ref={ref} />;
  },
);
Globe.displayName = "Globe";

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
  globeMaterial: undefined,
  rendererConfig: { antialias: true, alpha: true },
  enablePointerInteraction: false,
};

export default function GlobeComponent() {
  return <Globe {...globeConfig} />;
}
