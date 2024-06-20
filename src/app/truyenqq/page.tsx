"use client";

import MangaCard from "@/src/components/MangaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { SpotlightSlider } from "@/src/components/Slider/SpotlightSlider";
import { MangaSpotlight } from "@/src/components/Slider/MangaSpotlight";
import { Manga } from "@/src/api/schema";

import { useSpotlightList, useMangaList } from "@/src/hooks/useMangaList";

// max manga card = 6col * 7 row

export default function Truyenqq() {
  const { spotLightResponse } = useSpotlightList();
  const { mangaListResponse } = useMangaList({
    limit: 42,
    offset: 0,
  });
  return (
    <div className="w-full h-auto px-2 xl:px-40 py-4">
      <div>
        <div className="text-red flex items-center">
          <FontAwesomeIcon icon={faStar} />
          <div className="text-xl font-bold">Truyện Đề cử</div>
        </div>
        <div className="flex justify-around py-4 mb-8">
          <SpotlightSlider>
            {spotLightResponse?.map((res: Manga, index: number) => {
              return <MangaSpotlight key={index} props={res} />;
            })}
          </SpotlightSlider>
        </div>
      </div>
      <div>
        <div className="text-normalBlue flex items-center">
          <FontAwesomeIcon icon={faCloudArrowDown} />
          <div className="text-xl font-bold">Truyện hay</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-4 gap-6">
          {mangaListResponse?.map((manga: Manga, index: number) => {
            return <MangaCard key={index} props={manga} />;
          })}
        </div>
      </div>
      <div className = "flex w-full justify-center">
        <a className = "bg-orange p-4 text-white font-semibold rounded-lg hover:bg-orange/[.8]" href = "/truyenqq/update">
          Xem thêm nhiều truyện hay
        </a>
      </div>
    </div>
  );
}
