import Image from "next/image";
import StarsImage from "public/stars-2k.webp";
import GlobeComponent from "./globe";

export default function Header() {
  return (
    <header className="header">
      <Image
        src={StarsImage}
        alt="Stars"
        className="absolute z-0 h-full w-full bg-center object-cover object-center"
        aria-hidden
        aria-disabled
      />
      <div className="container">
        <GlobeComponent />
        {/*         <GlobeComponent>
          <CeresLogo />
        </GlobeComponent> */}
      </div>
    </header>
  );
}

const CeresLogo = () => {
  return (
    <div className="logo">
      <div className="title">
        <h1 className="font-sofachroma text-5xl uppercase">Ceres</h1>
        <h2 className="font-sofachroma text-xl uppercase">Corp.</h2>
      </div>
      <h3 className="description">
        Professional, Cost-effective Environmental Services
      </h3>
    </div>
  );
};
