import { Tag } from "antd";
import _ from "lodash";
import Image from "next/image";
import { Manga } from "../api/schema";
import { statusTranslate } from "../constants/translate";
import getCoverArt from "../utils/getCoverImage";
import reduceText from "../utils/reduceText";

function MangaSearchCard({ manga }: { manga: Manga }) {
  console.log(manga);
  return (
    <a
      href={`/truyenqq/${_.get(manga, "id")}/${
        _.get(manga, ["attributes", "altTitles", "0", "vi"]) ??
        _.get(manga, [
          "attributes",
          "title",
          Object.keys(manga.attributes.title)[0],
        ])
      }`}
      className="flex gap-4 p-2 hover:bg-grey"
    >
      <div className="w-auto h-24 aspect-[7/10]">
        <Image
          unoptimized
          className="object-cover object-center w-full h-full"
          src={getCoverArt(manga)}
          alt="Cover Image"
          height={400}
          width={400}
        />
      </div>
      <div className="flex flex-col">
        <div className="font-semibold text-base">
          {reduceText(
            _.get(manga, [
              "attributes",
              "title",
              Object.keys(manga.attributes.title)[0],
            ]),
            35
          )}
        </div>
        <div className="flex flex-col gap-1 text-sm">
          <div className="flex gap-1">
            <div>Chap mới nhất: </div>
            {_.get(manga, ["attributes", "lastChapter"]) ?? "Đang cập nhật"}
          </div>
          <div className="flex gap-1">
            <div>Tác giả:</div>
            {
              <div>
                {_.get(_.filter(manga.relationships, ["type", "author"])[0], [
                  "attributes",
                  "name",
                ])}
              </div>
            }
          </div>
          <div>
            <Tag
              color={
                statusTranslate(_.get(manga, ["attributes", "status"])) ==
                "Hoàn thành"
                  ? "green"
                  : "blue"
              }
            >
              {statusTranslate(_.get(manga, ["attributes", "status"]))}
            </Tag>
          </div>
        </div>
      </div>
    </a>
  );
}

export default MangaSearchCard;
