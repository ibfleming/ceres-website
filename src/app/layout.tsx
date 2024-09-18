import "~/styles/globals.css";

import dynamic from "next/dynamic";
import { type Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { inter, outfit, sofachroma, rubik } from "~/lib/fonts";

export const metadata: Metadata = {
  title:
    "Phase I Environmental Site Assessments (ESAs) | CERES Corp. - Expert Consulting Services",
  authors: [
    {
      name: "Ian B. Fleming",
      url: "https://github.com/ibfleming?tab=repositories",
    },
  ],
  description:
    "Reduce environmental liability risks with CERES Corp.'s expert Phase I Environmental Site Assessments (ESAs). Our experienced team, led by Registered Environmental Property Assessors (REPAs), provides cost-effective, timely, and reliable consulting services in the western United States, following ASTM E1527-21 standards. Trust our full-service environmental consulting company for honest and technically competent solutions.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  keywords:
    "CERES, CERES Corp, environmental consulting, Phase 1 Environmental Assessment, ASTM E1527-21, environmental site assessment, ESA, environmental due diligence, property assessment, environmental risk assessment, Phase I ESA, real estate due diligence, environmental consulting firm, environmental compliance, site contamination, hazardous materials assessment, environmental audit, environmental impact assessment, site history review, environmental services, environmental inspection, property contamination, environmental report, environmental review, site evaluation, land assessment, environmental consulting services",
  robots: { follow: true, index: true },
  openGraph: {
    type: "website",
    url: "https://cerescorp.org/",
    title: "CERES Corp. - Expert Consulting Services",
    description:
      "Reduce environmental liability risks with CERES Corp.'s expert Phase I Environmental Site Assessments (ESAs). Our experienced team, led by Registered Environmental Property Assessors (REPAs), provides cost-effective, timely, and reliable consulting services in the western United States, following ASTM E1527-21 standards. Trust our full-service environmental consulting company for honest and technically competent solutions.",
    siteName: "CERES Corp.",
  },
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
      <GoogleAnalytics gaId="G-LX5817TVXY" />
    </html>
  );
}
