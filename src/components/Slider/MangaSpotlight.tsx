import Image from "next/image";

import _ from "lodash";
import { Manga } from "@/src/api/schema";
import getCoverArt from "@/src/utils/getCoverImage";
// import picture

export const MangaSpotlight = ({ props }: { props: Manga }) => {
  return (
    <div className="relative w-full h-full">
      <div className="w-[calc(100vw-1rem)] xl:w-[calc(100vw-20rem)] h-[calc(160px+2rem)] md:h-[calc(225px+4rem)] opacity-50 -translate-y-24">
        <picture>
          <img
            className="w-full h-auto object-cover"
            // width={1}
            src={getCoverArt(props)}
            alt="thumbnail"
          />
        </picture>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/[.2] to-white/[.8] flex">
        <div className=" flex gap-4 p-4 items-stretch">
          <div className="w-auto h-40 md:h-full aspect-[7/10]">
            <picture>
              <img
                className="object-cover object-center w-full h-full"
                src={getCoverArt(props)}
                alt="thumbnail"
              />
            </picture>
          </div>
          <div className="flex flex-col justify-between h-40 md:h-full">
            <div>
              <div className="text-xl font-black overflow-hidden">
                {_.get(props, ["attributes", "title", "en"]).length > 70
                  ? _.get(props, ["attributes", "title", "en"]).slice(0, 70) +
                    "..."
                  : _.get(props, ["attributes", "title", "en"])}
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                {_.get(props, ["attributes", "tags"])
                  .slice(0, 3)
                  .map((tag, index) => {
                    return (
                      <div key={index} className="bg-grey p-2 text-xs">
                        {_.get(tag, ["attributes", "name", "en"])}
                      </div>
                    );
                  })}
                {_.get(props, ["attributes", "tags"]).length > 3
                  ? <div className = "text-base">{`+ ${_.get(props, ["attributes", "tags"]).length - 3} more tags`}</div>
                  : ""}
              </div>
              <div className="font-semibold hidden md:block">
                {_.get(props, ["attributes", "description", "en"])}
              </div>
            </div>
            <div className="font-bold italic">
              {_.get(_.filter(props.relationships, ["type", "author"])[0], [
                "attributes",
                "name",
              ])}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
