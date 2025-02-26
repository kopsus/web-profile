import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Tegar Setio",
  description: "My Personal Web Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} px-5 md:px-20 min-h-screen max-w-[1400px] mx-auto`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
