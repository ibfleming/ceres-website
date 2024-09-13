import Image from "next/image";
import StarsImage from "public/stars-2k.webp";
import Globe from "@/globe";

export default function Header() {
  return (
    <header className="relative h-80 max-h-96 min-h-80 w-full">
      <Image
        src={StarsImage}
        alt="Stars"
        className="absolute z-0 h-full w-full bg-center object-cover object-center"
        aria-hidden
        aria-disabled
      />
      <div className="relative z-10 flex h-full items-center justify-center text-background">
        <Globe />
        <CeresLogo />
      </div>
    </header>
  );
}

const CeresLogo = () => {
  return (
    <div className="flex flex-col items-center gap-0.5">
      <div className="logo italic">
        <h1 className="font-sofachroma text-5xl uppercase">Ceres</h1>
        <h2 className="font-sofachroma text-xl uppercase">Corp</h2>
      </div>
      <h3 className="text-xs">
        Professional, Cost-effective Environmental Services
      </h3>
    </div>
  );
};
