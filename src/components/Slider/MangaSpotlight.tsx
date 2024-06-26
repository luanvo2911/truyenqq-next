import { Author, Manga } from "@/src/api/schema";
import useIsMobile from "@/src/hooks/useIsMobile";
import useMangaStore from "@/src/store/manga";
import getDateFns from "@/src/utils/dateFns";
import getCoverArt from "@/src/utils/getCoverImage";
import reduceText from "@/src/utils/reduceText";
import _ from "lodash";
import Link from "next/link";

export const MangaSpotlight = ({ props }: { props: Manga }) => {
  const isMobile = useIsMobile();
  const { manga, setManga } = useMangaStore();
  return (
    <Link
      className="relative w-full h-full"
      href={`/truyenqq/${props.id}`}
      onClick={(event: any) => {
        setManga(props);
      }}
    >
      <div className="w-[calc(100vw-1rem)] xl:w-[calc(100vw-20rem)] h-[calc(160px+2rem)] md:h-[calc(225px+4rem)] opacity-50 -translate-y-24">
        <picture>
          <img
            className="w-full h-auto object-cover"
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
            <div className="flex flex-col gap-1">
              <div className="text-xl font-black overflow-hidden">
                {isMobile
                  ? reduceText(
                      _.get(props, ["attributes", "altTitles", "0", "vi"]) ??
                        _.get(props, ["attributes", "title", "en"]),
                      200
                    )
                  : reduceText(
                      _.get(props, ["attributes", "altTitles", "0", "vi"]) ??
                        _.get(props, ["attributes", "title", "en"]),
                      500
                    )}
              </div>
              <div className="font-semibold">
                Cập nhật {getDateFns(_.get(props, ["attributes", "updatedAt"]))}
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                {isMobile
                  ? _.get(props, ["attributes", "tags"])
                      .slice(0, 3)
                      .map((tag, index) => {
                        return (
                          <div key={index} className="bg-grey p-2 text-xs">
                            {_.get(tag, ["attributes", "name", "en"])}
                          </div>
                        );
                      })
                  : _.get(props, ["attributes", "tags"]).map((tag, index) => {
                      return (
                        <div key={index} className="bg-grey p-2 text-xs">
                          {_.get(tag, ["attributes", "name", "en"])}
                        </div>
                      );
                    })}
              </div>
              <div className="font-semibold hidden md:block">
                {isMobile
                  ? reduceText(
                      _.get(props, ["attributes", "description", "en"]),
                      200
                    )
                  : reduceText(
                      _.get(props, ["attributes", "description", "en"]),
                      500
                    )}
              </div>
            </div>
            <div className="font-bold italic flex gap-4">
              {_.filter(props.relationships, ["type", "author"]).map(
                (author: Author, index) => {
                  return (
                    <div key={index}>
                      {_.get(author, ["attributes", "name"])}
                    </div>
                  );
                }
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
