import { Suspense } from "react";
import Loading from "./loading";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";

export default function TruyenqqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        <NavBar />
        {children}
        <Footer />
      </Suspense>
    </div>
  );
}
