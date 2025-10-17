import { Geist, Geist_Mono } from "next/font/google";

const geistSansFont = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
});

const geistMonoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  adjustFontFallback: true,
});

const geistSans = geistSansFont.variable;
const geistMono = geistMonoFont.variable;

const join = (fonts: string[]) => fonts.join(" ");
const fonts = join([geistSans, geistMono]);

export default fonts;
