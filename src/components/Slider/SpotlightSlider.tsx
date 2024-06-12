import { ReactNode } from "react";

export const SpotlightSlider = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full h-full flex relative overflow-hidden">
      {children}
    </div>
  );
};
