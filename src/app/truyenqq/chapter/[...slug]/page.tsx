"use client";
import useChapterStore from "@/src/store/chapter";
import { useEffect } from "react";
import { getChapterArt } from "@/src/utils/getChapterImage";
import Image from "next/image";
import Link from "next/link";
import _ from "lodash";
import { Breadcrumb } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { getDateString } from "@/src/utils/dateFns";

export default function Page({ params }: { params: { slug: string } }) {
  const { chapter, setChapter, chapterInfo, setChapterInfo } =
    useChapterStore();
  useEffect(() => {
    setChapter(params.slug);
    setChapterInfo(params.slug);
  }, [setChapter, setChapterInfo, params]);
  return (
    <div className="bg-bgBlack py-4">
      {chapter && chapterInfo ? (
        <div>
          <div className="h-auto xl:mx-40 bg-white px-4 py-8 flex flex-col gap-4 rounded-lg">
            <div>
              <Breadcrumb
                className="text-base"
                items={[
                  {
                    title: <Link href="/truyenqq">Truyenqq</Link>,
                  },
                  {
                    title: (
                      <Link
                        href={`/truyenqq/${_.get(
                          _.filter(_.get(chapterInfo, "relationships"), [
                            "type",
                            "manga",
                          ])[0],
                          ["id"]
                        )}`}
                      >
                        {_.get(
                          _.filter(_.get(chapterInfo, "relationships"), [
                            "type",
                            "manga",
                          ])[0],
                          ["attributes", "title", "en"]
                        )}
                      </Link>
                    ),
                  },
                  {
                    title: `Chapter ${_.get(chapterInfo, [
                      "attributes",
                      "chapter",
                    ])}`,
                  },
                ]}
              />
            </div>
            <div className="flex flex-col items-center px-4">
              <div className="text-2xl font-semibold">
                {_.get(
                  _.filter(_.get(chapterInfo, "relationships"), [
                    "type",
                    "manga",
                  ])[0],
                  ["attributes", "title", "en"]
                )}{" "}
                - Chapter {_.get(chapterInfo, ["attributes", "chapter"])}
              </div>
              <div className="text-sm">
                (Cập nhật lúc:{" "}
                {chapterInfo
                  ? getDateString(
                      _.get(chapterInfo, ["attributes", "updatedAt"])
                    )
                  : "NaN"}
                )
              </div>
            </div>
            <div className="bg-lightBlue flex items-center gap-2 justify-center p-2 rounded-lg">
              <FontAwesomeIcon icon={faInfoCircle} />
              <div className="text-textBlue">
                Sử dụng mũi tên trái (&#8592;) hoặc phải (&#8594;) để chuyển
                chapter
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="bg-normalBlue p-2 rounded-lg text-white font-semibold hover:bg-normalBlue/[.6]"
              >
                &#8592; Chap trước
              </a>
              <a
                href="#"
                className="bg-normalBlue p-2 rounded-lg text-white font-semibold hover:bg-normalBlue/[.6]"
              >
                Chap sau &#8594;
              </a>
            </div>
          </div>
          <div className="xl:mx-40 flex flex-col items-center pt-8">
            {getChapterArt(chapter)?.map((url: string, index: number) => {
              return (
                <Image
                  key={index}
                  src={url}
                  alt={`image of chapter`}
                  width={400}
                  height={400}
                  className="w-full xl:w-[60vw] h-auto"
                  priority={true}
                />
              );
            })}
          </div>
          <div className="h-auto xl:mx-40 bg-white px-4 py-8 mt-4 flex flex-col gap-4 rounded-lg">
            <div className="flex items-center justify-center gap-2">
              <a
                href="#"
                className="bg-normalBlue p-2 rounded-lg text-white font-semibold hover:bg-normalBlue/[.6]"
              >
                &#8592; Chap trước
              </a>
              <a
                href="#"
                className="bg-normalBlue p-2 rounded-lg text-white font-semibold hover:bg-normalBlue/[.6]"
              >
                Chap sau &#8594;
              </a>
            </div>
            <div>
              <Breadcrumb
                className="text-base"
                items={[
                  {
                    title: <Link href="/truyenqq">Truyenqq</Link>,
                  },
                  {
                    title: (
                      <Link
                        href={`/truyenqq/${_.get(
                          _.filter(_.get(chapterInfo, "relationships"), [
                            "type",
                            "manga",
                          ])[0],
                          ["id"]
                        )}`}
                      >
                        {_.get(
                          _.filter(_.get(chapterInfo, "relationships"), [
                            "type",
                            "manga",
                          ])[0],
                          ["attributes", "title", "en"]
                        )}
                      </Link>
                    ),
                  },
                  {
                    title: `Chapter ${_.get(chapterInfo, [
                      "attributes",
                      "chapter",
                    ])}`,
                  },
                ]}
              />
            </div>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
