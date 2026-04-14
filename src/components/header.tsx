"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import StarsImage from "~/assets/stars-2k.webp";
import React from "react";
import Loader from "./loader";
import { ThemeToggle } from "./theme-toggle";

const GlobeComponent = dynamic(() => import("./globe"), {
  ssr: false,
  loading: () => (
    <div className="flex h-90 w-90 items-center justify-center">
      <Loader />
    </div>
  ),
});

export default function Header() {
  return (
    <header className="header">
      <Image
        src={StarsImage}
        alt="Stars"
        className="absolute z-0 h-full w-full bg-center object-cover object-center"
        priority
        aria-hidden
        aria-disabled
      />
      <ThemeToggle />
      <div className="wrapper">
        <GlobeComponent>
          <CeresLogo />
        </GlobeComponent>
      </div>
    </header>
  );
}

const CeresLogo = () => {
  return (
    <div className="logo">
      <div className="title">
        <h1 className="font-sofachroma text-6xl uppercase max-sm:text-5xl">
          Ceres
        </h1>
        <h2 className="pb-px font-sofachroma text-2xl uppercase max-sm:text-xl">
          Corp.
        </h2>
      </div>
      <h3 className="description">
        Professional, Cost-effective Environmental Services
      </h3>
    </div>
  );
};
