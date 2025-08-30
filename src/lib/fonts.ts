import { Geist } from "next/font/google";
import localFont from "next/font/local";

const geistSansFont = Geist({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMonoFont = localFont({
  variable: "--font-archivo",
  src: [
    {
      path: "../../public/fonts/RykerBold.woff",
      weight: "800",
      style: "normal",
    },
  ],
  display: "swap",
});

const geistMono = geistMonoFont.variable;
const geistSans = geistSansFont.variable;

const fonts = geistMono + " " + geistSans;

export default fonts;
