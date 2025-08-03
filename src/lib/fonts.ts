import { Archivo, Inter } from "next/font/google";

const geistSansFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMonoFont = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
});

const geistMono = geistMonoFont.variable;
const geistSans = geistSansFont.variable;

const fonts = geistMono + " " + geistSans;

export default fonts;
