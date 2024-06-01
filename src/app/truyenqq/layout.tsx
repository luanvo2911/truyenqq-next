import { Suspense } from "react";
import Loading from "./loading";
import NavBar from "@/src/components/NavBar";

export default function TruyenqqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-screen">
      <Suspense fallback={<Loading />}>
        <NavBar />
        {children}
      </Suspense>
    </div>
  );
}
