"use client";
import { Chapter, Tag } from "@/src/api/schema";
import { useMangaInfo } from "@/src/hooks/useMangaList";
import getCoverArt from "@/src/utils/getCoverImage";
import {
  faBook,
  faComments,
  faDatabase,
  faEye,
  faHeart,
  faInfoCircle,
  faLocationArrow,
  faRss,
  faThumbsUp,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Breadcrumb, Spin } from "antd";
import _ from "lodash";
import Link from "next/link";
import useMangaStore from "@/src/store/manga";
import { useEffect } from "react";
import { statusTranslate } from "@/src/constants/translate";
import getDateFns from "@/src/utils/dateFns";
import { Nation } from "@/src/constants/nations";
import Image from "next/image";

export default function Page({ params }: { params: { slug: string } }) {
  // use router
  const { statistic, setStatistic, chapterList, setChapterList } =
    useMangaStore();
  const { mangaResponse, error, isLoading } = useMangaInfo(params.slug);

  useEffect(() => {
    setStatistic(params.slug);
    setChapterList(params.slug);
  }, [params.slug, setStatistic, setChapterList]);

  console.log(chapterList);

  return isLoading ? (
    <Spin />
  ) : (
    <div className="h-auto mx-2 xl:mx-40 my-4 bg-white p-4 flex flex-col gap-4">
      <Breadcrumb
        className="text-base"
        items={[
          { title: <Link href="/truyenqq">Trang chủ</Link> },
          {
            title:
              _.get(mangaResponse, ["attributes", "altTitles", "0", "vi"]) ??
              _.get(mangaResponse, ["attributes", "title", "en"]),
          },
        ]}
      />
      <div className="flex flex-col xl:flex-row justify-center xl:justify-start w-full gap-8">
        <div className="flex items-center justify-center">
          <div className="w-auto h-[250px] aspect-[7/10]">
            <picture>
              <img
                className="object-cover object-center w-full h-full rounded-lg shadow-xl"
                src={getCoverArt(mangaResponse)}
                alt="thumbnail"
              />
            </picture>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <div className="text-xl font-semibold">
            {_.get(mangaResponse, ["attributes", "altTitles", "0", "vi"]) ??
              _.get(mangaResponse, ["attributes", "title", "en"])}
          </div>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faUser} />
                <p>Tác giả</p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faRss} />
                <p>Tình trạng</p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faThumbsUp} />
                <p>Đánh giá</p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHeart} />
                <p>Lượt theo dõi</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-2">
                {_.filter(_.get(mangaResponse, "relationships"), [
                  "type",
                  "author",
                ])?.map((author: any, index: number) => {
                  return (
                    <div key={index}>
                      {_.get(author, ["attributes", "name"])}
                    </div>
                  );
                })}
              </div>
              <div>
                {statusTranslate(
                  _.get(mangaResponse, ["attributes", "status"])
                )}
              </div>
              <div>
                {statistic ? Math.round(statistic.rating.average) : "NaN"}/10
              </div>
              <div>{statistic ? statistic.follows : "NaN"}</div>
              {/* <div>123</div> */}
            </div>
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            {mangaResponse ? (
              _.get(mangaResponse, ["attributes", "tags"])?.map(
                (tag: Tag, index: number) => {
                  return (
                    <Link
                      key={index}
                      className="p-1 text-sm text-orange border border-orange hover:bg-orange hover:text-white rounded-sm"
                      href="#"
                    >
                      {_.get(tag, ["attributes", "name", "en"])}
                    </Link>
                  );
                }
              )
            ) : (
              <div />
            )}
          </div>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 w-auto">
            <div className="bg-green flex gap-2 items-center text-lg justify-center p-2 text-white rounded-xl">
              <FontAwesomeIcon icon={faBook} />
              <div>Đọc từ đầu</div>
            </div>
            <div className="bg-red flex gap-2 items-center text-lg justify-center p-2 text-white rounded-xl">
              <FontAwesomeIcon icon={faHeart} />
              <div>Theo dõi</div>
            </div>
            <div className="bg-purple flex gap-2 items-center text-lg justify-center p-2 text-white rounded-xl">
              <FontAwesomeIcon icon={faThumbsUp} />
              <div>Đọc từ đầu</div>
            </div>
            <div className="bg-normalBlue flex gap-2 items-center text-lg justify-center p-2 text-white rounded-xl">
              <FontAwesomeIcon icon={faLocationArrow} />
              <div>Đọc tiếp</div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-2 text-orange items-center text-xl">
          <FontAwesomeIcon icon={faInfoCircle} />
          <div>Giới thiệu</div>
        </div>
        <div>
          {_.get(mangaResponse, ["attributes", "description", "vi"]) ??
            _.get(mangaResponse, ["attributes", "description", "en"]) ??
            "Mô tả truyện đang được cập nhật. Theo dõi truyện tại truyenqq-next"}
        </div>
      </div>
      <div>
        <div className="flex gap-2 text-orange items-center text-xl">
          <FontAwesomeIcon icon={faDatabase} />
          <div>Danh sách chương</div>
        </div>
        {chapterList && chapterList?.length > 0 ? (
          <div className="shadow-xl border border-grey max-h-[50vh] overflow-y-scroll flex flex-col mt-2">
            {chapterList.map((chapter: Chapter, index: number) => {
              return (
                <a
                  href = {`/truyenqq/chapter/${_.get(chapter, "id")}`}
                  className="flex justify-between hover:bg-grey p-2 mx-2"
                  key={_.get(chapter, "id") ?? index}
                >
                  <div className="flex gap-4 items-center">
                    <div>
                      Chapter {_.get(chapter, ["attributes", "chapter"])}
                    </div>
                    <div>
                      <Image
                        width={20}
                        height={20}
                        src={_.get(
                          Nation,
                          _.get(chapter, ["attributes", "translatedLanguage"])
                        )}
                        alt={`${_.get(chapter, [
                          "attributes",
                          "translatedLanguage",
                        ])} flag`}
                      />
                    </div>
                  </div>
                  <div>
                    {getDateFns(_.get(chapter, ["attributes", "readableAt"]))}
                  </div>
                </a>
              );
            })}
          </div>
        ) : (
          <div>
            Danh sách chương đang được cập nhật nhanh nhất tại truyenqq-next
          </div>
        )}
      </div>

      <div>
        <div className="flex gap-2 text-orange items-center text-xl">
          <FontAwesomeIcon icon={faComments} />
          <div>
            Bình luận ({statistic ? statistic.comments?.repliesCount : "0"})
          </div>
        </div>
      </div>
    </div>
  );
}
