import Image from "next/image";

import thumbnailImage from "@/public/static/thumbnail.png";

export default function MangaCard() {
  return (
    <div className="object-cover flex flex-col items-center">
      <div className = "relative">
        <div className = "absolute flex">
          <div className = "object-cover bg-normalBlue z-10 m-2 text-white text-sm px-[1px] rounded-[4px]">10 phút trước</div>
          <div className = "object-cover bg-red z-10 my-2 text-white text-sm px-[1px] rounded-[4px]">Hot</div>
        </div>
        <Image src={thumbnailImage} width={160} height={150} alt="thumbnail" />
      </div>
      <div className="font-bold text-base">Manga Title</div>
      <div className="font-semibold text-xs">Chap 123</div>
    </div>
  );
}
