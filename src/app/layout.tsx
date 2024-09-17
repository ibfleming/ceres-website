import "~/styles/globals.css";

import { type Metadata } from "next";
import { inter, outfit, sofachroma } from "~/lib/fonts";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: "Ceres (dev)",
  description: "Ceres website, version 2",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sofachroma.variable} ${outfit.variable}`}
    >
      <body>
        <ThemeProvider attribute="class" defaultTheme="light">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
