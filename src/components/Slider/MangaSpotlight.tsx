import Image from "next/image";

import { Poster } from "@/src/types/poster";

export const MangaSpotlight = ({ props }: { props: Poster }) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-[calc(100vw-1rem)] xl:w-[calc(100vw-20rem)] h-[calc(160px+2rem)] md:h-[calc(225px+4rem)] opacity-50 -translate-y-24">
        <Image
          className="w-full h-auto object-cover"
          src={props.image}
          alt="thumbnail"
        />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[.2] to-white/[.8] flex">
        <div className=" flex gap-4 p-4 items-stretch">
          <div className="w-auto h-40 md:h-full aspect-[7/10]">
            <Image
              className="object-cover object-center w-full h-full"
              src={props.image}
              alt="thumbnail"
            />
          </div>
          <div className="flex flex-col justify-between h-40 md:h-full">
            <div>
              <div className="text-xl font-black overflow-hidden">
                {props.title.length > 70
                  ? props.title.slice(0, 70) + "..."
                  : props.title}
              </div>
              <div className="flex gap-2 flex-wrap">
                {props.tags.map((tag, index) => {
                  return (
                    <div key={index} className="bg-grey p-2 text-xs">
                      {tag}
                    </div>
                  );
                })}
              </div>
              <div className="font-semibold hidden md:block">
                {props.description}
              </div>
            </div>
            <div className="font-bold italic">{props.author}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
