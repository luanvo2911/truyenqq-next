import Image from "next/image";

import thumbnailImage from "@/public/static/thumbnal.png";

export default function MangaCard() {
  return (
    <div className="object-cover">
      <Image src={thumbnailImage} width={160} height={150} alt="thumbnail" />
      <div>Manga Title</div>
      <div>Latest Episode</div>
    </div>
  );
}
