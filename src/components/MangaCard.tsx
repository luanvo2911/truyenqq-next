"use client";

import _ from "lodash";
import Link from "next/link";
import { Manga } from "../api/schema";
import getDateFns from "../utils/dateFns";
import getCoverArt from "../utils/getCoverImage";
import reduceText from "../utils/reduceText";
import Image from "next/image";

export default function MangaCard({ props }: { props: Manga }) {
  return (
    <Link
      className="object-cover flex flex-col items-center"
      href={`/truyenqq/${props.id}/${
        (_.get(props, ["attributes", "altTitles", "0", "vi"]) ??
        _.get(props, [
          "attributes",
          "title",
          Object.keys(props.attributes.title)[0],
        ])).replaceAll(" ", "-")
      }`}
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
        <div className="w-full h-auto md:h-full aspect-[7/10]">
          <Image
            className="object-cover object-center w-full h-full"
            src={getCoverArt(props)}
            alt="thumbnail"
            width={640}
            height={957}
            priority={true}
          />
        </div>
      </div>
      <div className="font-bold text-base text-center">
        {reduceText(
          _.get(props, ["attributes", "altTitles", "0", "vi"]) ??
            _.get(props, [
              "attributes",
              "title",
              Object.keys(props.attributes.title)[0],
            ]),
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
