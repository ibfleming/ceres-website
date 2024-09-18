import { Inter, Outfit, Rubik } from "next/font/google";
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

const rubik = Rubik({
  subsets: ["latin"],
  variable: "--font-rubik",
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

export { inter, sofachroma, outfit, rubik };
