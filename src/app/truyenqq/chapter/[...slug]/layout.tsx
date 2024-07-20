import { Suspense } from "react";
import Loading from "./loading";

export default function TruyenqqLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-screen h-auto overflow-x-hidden">
      <Suspense fallback={<Loading />}>
        {children}
      </Suspense>
    </div>
  );
}
