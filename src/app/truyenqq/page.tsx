import MangaCard from "@/src/components/MangaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { SpotlightSlider } from "@/src/components/Slider/SpotlightSlider";
import { MangaSpotlight } from "@/src/components/Slider/MangaSpotlight";

// max manga card = 6col * 7 row

export default function Truyenqq() {
  return (
    <div className="w-full px-2 xl:px-40 py-4">
      <div>
        <div className="text-red flex items-center">
          <FontAwesomeIcon icon={faStar} />
          <div className="text-xl font-bold">Truyện Hay</div>
        </div>
        <div className="flex justify-around py-4">
          <SpotlightSlider>
            <MangaSpotlight />
            <MangaSpotlight />
            <MangaSpotlight />
            <MangaSpotlight />
            <MangaSpotlight />
            <MangaSpotlight />
            <MangaSpotlight />
          </SpotlightSlider>
        </div>
      </div>
      <div>
        <div className="text-normalBlue flex items-center">
          <FontAwesomeIcon icon={faCloudArrowDown} />
          <div className="text-xl font-bold">Truyện mới cập nhật</div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-4 gap-4">
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
          <MangaCard />
        </div>
      </div>
    </div>
  );
}
