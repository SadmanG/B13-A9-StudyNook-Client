import dns from "node:dns";
dns.setServers(['8.8.8.8', '8.8.4.4']);

import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

export const metadata = {
  title: "SunCart | Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`h-full antialiased`}
    >
      <body className={`${poppins.className} min-h-full flex flex-col`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
