import Image from "next/image";
import StarsImage from "public/stars-2k.webp";
import React from "react";
import GlobeComponent from "./globe";
import { ThemeToggle } from "./theme-toggle";

export default function Header() {
  return (
    <header className="header">
      <Image
        src={StarsImage}
        alt="Stars"
        className="absolute z-0 h-full w-full bg-center object-cover object-center"
        unoptimized={true}
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
        <h2 className="pb-[1px] font-sofachroma text-2xl uppercase max-sm:text-xl">
          Corp.
        </h2>
      </div>
      <h3 className="description">
        Professional, Cost-effective Environmental Services
      </h3>
    </div>
  );
};
