"use client";

import logoMobile from "@/public/static/logo-mobile.png";
import logoPC from "@/public/static/logo-pc.png";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";

export default function NavBar() {
  const isMobile = useIsMobile();
  return (
    <div className="w-full h-[16vh]">
      <div className="max-w-full h-[60%] flex justify-between items-center mx-4 xl:mx-40">
        <div className="flex items-center">
          <Image
            src={isMobile ? logoMobile : logoPC}
            width={isMobile ? 40 : 150}
            height={isMobile ? 40 : 150}
            alt="Logo icon for PC"
          />
          <div>Bạn muốn tìm truyện gì</div>
        </div>
        <div className="flex space-x-4">
          <button className="bg-darkBlue px-4 py-2 rounded-[8px] text-white text-sm font-bold">
            Đắng kí
          </button>
          <button className="bg-darkBlue px-4 py-2 rounded-[8px] text-white text-sm font-bold">
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="w-full h-[40%] bg-orange">this is tag</div>
    </div>
  );
}
