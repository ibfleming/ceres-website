import { Inter, Outfit, Chivo_Mono } from "next/font/google";
import localFont from "next/font/local";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const chivo = Chivo_Mono({
  subsets: ["latin"],
  variable: "--font-chivo",
  display: "swap",
});

const sofachroma = localFont({
  src: [
    {
      path: "../../public/sofachrome.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/sofachrome-italic.otf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-sofachroma",
  display: "swap",
});

export { inter, sofachroma, outfit, chivo };
