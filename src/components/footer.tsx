import Image from "next/image";
import Link from "next/link";

import StarsImage from "public/stars-2k.webp";

export default function Footer() {
  return (
    <footer className="h-min-[80px] h-max-[80px] relative h-[80px] w-full">
      <Image
        src={StarsImage}
        alt="Stars"
        className="absolute z-0 h-full w-full bg-center object-cover object-center"
        aria-hidden
        aria-disabled
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="font-rubik text-sm text-white">
          © Ceres, Corp. 2024 -- Website created by{" "}
          <Link
            href="https://github.com/ibfleming?tab=repositories"
            className="underline"
          >
            Ian Fleming
          </Link>
        </h1>
      </div>
    </footer>
  );
}
