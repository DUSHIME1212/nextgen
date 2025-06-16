import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "./_components/Footer";
import LenisScrollProvider from "./providers/lenis-provider";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import PageTransition from "@/components/animations/PageTransition";
import Loader from "./_components/Loader";
import Footerv2 from "@/components/Footer";

export const metadata: Metadata = {
  title: "NextGen App",
  description: "A modern web application",
  icons: [{ rel: "icon", url: "/logo.png" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="font-dmsans">
          <ScrollProgress />
          {/* <Loader/> */}
          {/* <header>
            <Navbar />
          </header> */}

          {children} 
          <Footerv2/>
          {/* <footer>
            <Footer />
          </footer> */}
      </body>
    </html>
  );
}
