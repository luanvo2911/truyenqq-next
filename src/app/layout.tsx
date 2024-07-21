import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";
import useMangaStore from "../store/manga";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  preload: false
});

export const metadata: Metadata = {
  title: "Truyenqq Replica",
  description: "Remake truyenqq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Suspense fallback={<Loading />}>
        <body className={quicksand.className + " w-screen overflow-x-hidden bg-grey-bg"} >
          {children}
          <SpeedInsights />
        </body>
      </Suspense>
    </html>
  );
}
