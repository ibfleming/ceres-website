import "~/styles/globals.css";

import { type Metadata } from "next";
import { inter, outfit, sofachroma, rubik } from "~/lib/fonts";
import dynamic from "next/dynamic";

export const metadata: Metadata = {
  title: "Ceres (dev)",
  description: "Ceres website, version 2",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const ThemeProvider = dynamic(
  () => import("next-themes").then((mod) => mod.ThemeProvider),
  {
    ssr: false,
  },
);

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sofachroma.variable} ${outfit.variable} ${rubik.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
