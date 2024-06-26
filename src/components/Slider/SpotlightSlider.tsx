"use client";

import { ReactNode, useState, Children } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeftLong, faRightLong } from "@fortawesome/free-solid-svg-icons";

export const SpotlightSlider = ({ children }: { children: ReactNode }) => {
  const [curr, setCurr] = useState(0);
  return (
    <div className="w-full h-full overflow-hidden">
      <div
        className="flex relative transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {children}
      </div>
      <div className="absolute right-0 xl:right-[10rem] gap-4 flex items-center">
        <div className={`text-lg font-bold text-${curr == 0 ? 'red': 'black'}`}>No. {curr + 1}</div>
        <FontAwesomeIcon
          icon={faLeftLong}
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full z-10 p-4 "
          onClick={() => {
            if (curr > 0) {
              setCurr(curr - 1);
            } else {
              setCurr(Children.count(children) - 1);
            }
          }}
        />
        <FontAwesomeIcon
          icon={faRightLong}
          className="hover:cursor-pointer hover:bg-slate-300 rounded-full z-10 p-4 "
          onClick={() => {
            if (curr < Children.count(children) - 1) {
              setCurr(curr + 1);
            } else {
              setCurr(0);
            }
          }}
        />
      </div>
    </div>
  );
};
