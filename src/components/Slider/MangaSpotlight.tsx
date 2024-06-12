import Image from "next/image";

import thumbnailImage from "@/public/static/thumbnail1.png";

export const MangaSpotlight = () => {
  return (
    <div className="relative">
      <div className="w-[100vw] xl:w-[calc(100vw-20rem)] max-h-[calc(225px+4rem)] opacity-50 -translate-y-24">
        <Image
          className="w-full object-cover"
          src={thumbnailImage}
          alt="thumbnail"
        />
      </div>
      <div className="absolute top-0 left-0">
        <div className=" flex gap-4 p-4">
          <Image
            className="object-contain w-40"
            src={thumbnailImage}
            alt="thumbnail"
          />
          <div className="flex flex-col justify-between">
            <div>
              <div className="text-2xl font-black">
                Boku no Ikezuna Konyakusha
              </div>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-grey p-2 text-xs">Tag 1</div>
                <div className="bg-grey p-2 text-xs">Tag 2</div>
                <div className="bg-grey p-2 text-xs">Tag 3</div>
              </div>
              <div className="font-semibold hidden md:block">
                Miyuki-san is a young lady born in Kyoto. My relationship with
                her cannot be described as good. Because… &quot;You’re very good
                at flattery.&quot; Are those words sincere? Or just for show? A
                frustrating love story where our feelings for each other keep
                missing the mark.
              </div>
            </div>
            <div className="font-bold italic">Fuyutani Riku</div>
          </div>
        </div>
      </div>
    </div>
  );
};
