import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Suspense } from "react";
import Loading from "./loading";
import "./globals.css";

const quicksand = Quicksand({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
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
        <body className={quicksand.className}>
          {children}
          <SpeedInsights />
        </body>
      </Suspense>
    </html>
  );
}
