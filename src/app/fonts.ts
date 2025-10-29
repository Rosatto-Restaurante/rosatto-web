import { Poiret_One, Jost } from "next/font/google";

export const display = Poiret_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const sans = Jost({
  weight: ["300","400","500","600"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
