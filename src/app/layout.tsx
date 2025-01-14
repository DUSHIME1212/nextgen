import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Footer from "./_components/Footer";

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
        <header>
          <Navbar />
        </header>
        {children}
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
