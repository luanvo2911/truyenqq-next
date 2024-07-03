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

export default function Page({ params }: { params: { slug: string } }) {
  const { chapter, setChapter } = useChapterStore();

  useEffect(() => {
    setChapter(params.slug);
  }, [setChapter, params]);

  console.log(getChapterArt(chapter));

  return (
    <div className = "bg-bgBlack py-4">
      <div className="h-auto mx-2 xl:mx-40 bg-white px-4 py-8 flex flex-col gap-4 rounded-lg">
        <div>
          <Breadcrumb
            className="text-base"
            items={[
              {
                title: <Link href="/truyenqq">Truyenqq</Link>,
              },
              {
                title: <Link href="/truyenqq">ten truyen</Link>,
              },
              {
                title: "chapter 1",
              },
            ]}
          />
        </div>
        <div className = "flex flex-col items-center px-4">
          <div className = "text-2xl font-semibold">Ten truyen - Chapter 1</div>
          <div className = "text-sm">(Cập nhất lúc: 1/1/2021)</div>
        </div>
        <div className = "bg-lightBlue flex items-center gap-2 justify-center p-2 rounded-lg">
          <FontAwesomeIcon icon = {faInfoCircle} />
          <div className = "text-textBlue">Sử dụng mũi tên trái (&#8592;) hoặc phải (&#8594;) để chuyển chapter</div>
        </div>
        <div className = "flex items-center justify-center gap-2">
          <a href = "#" className = "bg-normalBlue p-2 rounded-lg text-white">&#8592; Chap trước</a>
          <a href = "#" className = "bg-normalBlue p-2 rounded-lg text-white">Chap sau &#8594;</a>
        </div>
      </div>
      <div className = "xl:mx-40 flex flex-col items-center">
          {getChapterArt(chapter)?.map((url: string, index: number) => {
            return (
              <Image
                key={index}
                src={url}
                alt={`image of chapter`}
                width={400}
                height={400}
                className = "w-full xl:w-[60vw] h-auto"
              />
            );
          })}
      </div>
    </div>
  );
}
