import MangaCard from "@/src/components/MangaCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCloudArrowDown } from "@fortawesome/free-solid-svg-icons";
import { SpotlightSlider } from "@/src/components/Slider/SpotlightSlider";
import { MangaSpotlight } from "@/src/components/Slider/MangaSpotlight";

// fake data
import { Poster } from "@/src/types/poster";
import thumbnailImage from "@/public/static/thumbnail1.png";
import thumbnailImage1 from "@/public/static/thumbnail2.png";
import thumbnailImage2 from "@/public/static/thumbnail3.png";
const placeholderPoster: Poster[] = [
  {
    image: thumbnailImage1,
    title: "Maigo ni Natteita Youjo wo Tasuketara, Otonari ni Sumu Bishoujo Ryuugakusei ga Ie ni Asobi ni Kuru You ni Natta Ken Nitsuite",
    tags: ["Comedy", "Romance", "Slice of Life"],
    description: "One day, Charlotte Bennett transferred to Aoyagi Akihito's class. Her proper and refined mannerisms and adorable appearance captured the hearts of his classmates, but Akihito calmly takes a step back, feeling that she \"lives in a different world.\"",
    author: "Nekokuro, Pentagon",
  },
  {
    image: thumbnailImage,
    title: "Boku no Ikezuna Konyakusha",
    tags: ["Comedy", "Romance", "Slice of Life"],
    description:
      "Miyuki-san is a young lady born in Kyoto. My relationship with her cannot be described as good. Because… \"You’re very good at flattery.\" Are those words sincere? Or just for show? A frustrating love story where our feelings for each other keep missing the mark.",
    author: "Fuyutani Riku",
  },
  {
    image: thumbnailImage2,
    title: "Remote Jugyou ni Nattara Class 1 no Bishoujo to Doukyo Suru Koto ni Natta",
    tags: ["Comedy", "Romance", "Slice of Life"],
    description:"High school student Kanata Yoshino who was at his wit's end, meets Haruka Hoshikawa, the most beautiful girl of his class, who was waving her smartphone alone in a park in the middle of the night. She is bad with machines and doesn't know how to connect to the internet, and asks him to help. He ends up visiting her house, but little does he know, she has a secret purpose...!",
    author: "Fuyutani Riku",
  },
];
// max manga card = 6col * 7 row

export default function Truyenqq() {
  return (
    <div className="w-full h-auto px-2 xl:px-40 py-4">
      <div>
        <div className="text-red flex items-center">
          <FontAwesomeIcon icon={faStar} />
          <div className="text-xl font-bold">Truyện Hay</div>
        </div>
        <div className="flex justify-around py-4 mb-8">
          <SpotlightSlider>
            {placeholderPoster.map((props, index) => {
              return <MangaSpotlight key={index} props={props} />;
            })}
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
