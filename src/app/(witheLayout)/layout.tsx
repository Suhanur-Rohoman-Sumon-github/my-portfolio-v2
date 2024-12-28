"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../../styels/globals.css";
import Footer from "@/components/home/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Providers } from "@/app/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mx-auto  bg-[#2e032f]`}
      >
        <Providers>
          <Navbar />
          <div className="md:w-10/12 mx-auto ">{children}</div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
