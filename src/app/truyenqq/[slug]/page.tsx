"use client";
import { Tag } from "@/src/api/schema";
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

export default function Page({ params }: { params: { slug: string } }) {
  // use router
  // const { manga } = useMangaStore();
  const { mangaResponse, error, isLoading } = useMangaInfo(params.slug);
  console.log({ mangaResponse, error, isLoading });
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
                className="object-cover object-center w-full h-full"
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
                <p>Lượt thích</p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faHeart} />
                <p>Lượt theo dõi</p>
              </div>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faEye} />
                <p>Lượt xem</p>
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
              <div>Ongoing</div>
              <div>123</div>
              <div>123</div>
              <div>123</div>
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
      </div>

      <div>
        <div className="flex gap-2 text-orange items-center text-xl">
          <FontAwesomeIcon icon={faComments} />
          <div>Bình luận</div>
        </div>
      </div>
    </div>
  );
}
