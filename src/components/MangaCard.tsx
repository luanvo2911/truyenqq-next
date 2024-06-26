"use client";

import Image from "next/image";

import thumbnailImage from "@/public/static/thumbnail.png";
import { Manga } from "../api/schema";
import getDateFns from "../utils/dateFns";
import _ from "lodash";
import getCoverArt from "../utils/getCoverImage";
import reduceText from "../utils/reduceText";
import Link from "next/link";
import useMangaStore from "../store/manga";
// import { useRouter } from "next/navigation";

export default function MangaCard({ props }: { props: Manga }) {
  const { manga, setManga } = useMangaStore();
  // const router = useRouter();
  return (
    <Link
      className="object-cover flex flex-col items-center"
      href={`/truyenqq/${props.id}`}
      onClick={(event: any) => {
        setManga(props);
      }}
    >
      <div className="relative w-full">
        <div className="absolute flex w-full">
          <div className="object-cover bg-normalBlue z-10 m-2 text-white text-sm px-[4px] rounded-[4px]">
            {getDateFns(_.get(props, ["attributes", "updatedAt"]))}
          </div>
          <div className="object-cover bg-red z-10 my-2 text-white text-sm px-[4px] rounded-[4px]">
            Hot
          </div>
        </div>
        {/* <Image src={getCoverArt(props)} width={160} height={150} alt="thumbnail" /> */}
        <div className="w-full h-auto md:h-full aspect-[7/10]">
          <picture>
            <img
              loading="lazy"
              className="object-cover object-center w-full h-full"
              src={getCoverArt(props)}
              alt="thumbnail"
            />
          </picture>
        </div>
      </div>
      <div className="font-bold text-base text-center">
        {reduceText(
          _.get(props, ["attributes", "altTitles", "0", "vi"]) ??
            _.get(props, ["attributes", "title", "en"]),
          25
        )}
      </div>
      <div className="font-semibold text-xs">
        {_.get(props, ["attributes", "lastChapter"]) !== ""
          ? "Chap " + _.get(props, ["attributes", "lastChapter"])
          : "Đang cập nhật ..."}
      </div>
    </Link>
  );
}
