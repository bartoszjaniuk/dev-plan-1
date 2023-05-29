import { Source_Sans_Pro, Roboto_Mono } from "next/font/google";

const sourceSansPro = Source_Sans_Pro({
  weight: "400",
  display: "swap",
  preload: true,
  subsets: ["latin"],
  variable: "--font-source-sans-pro",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const Font = {
  sourceSansPro,
  robotoMono,
};
