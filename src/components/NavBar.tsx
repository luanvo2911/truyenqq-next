"use client";

import logoMobile from "@/public/static/logo-mobile.png";
import logoPC from "@/public/static/logo-pc.png";
import Image from "next/image";
import useIsMobile from "../hooks/useIsMobile";
import useToggle from "../hooks/useToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faLightbulb,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const isMobile = useIsMobile();
  const {toggle, setToggle} = useToggle();
  return (
    <div className="w-full min-h-[100px]">
      <div className="max-w-full flex justify-between items-center mx-2 xl:mx-40 pt-4">
        <div className="flex items-center space-x-4">
          <button>
            <Image
              src={isMobile ? logoMobile : logoPC}
              width={isMobile ? 30 : 150}
              height={isMobile ? 30 : 150}
              alt="Logo icon for PC"
            />
          </button>
          <div className="border-2 border-orange w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer">
            <FontAwesomeIcon className="text-orange" icon={faLightbulb} />
          </div>
          {isMobile ? (
            <div />
          ) : (
            <div className="relative">
              <input
                className="px-4 py-2 w-[400px] border-2 border-orange rounded-[24px] focus:outline-none"
                placeholder="Bạn muốn tìm truyện gì"
              />
              <FontAwesomeIcon
                className="absolute right-3 top-3 text-orange"
                icon={faSearch}
              />
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          {isMobile ? (
            <button className="bg-orange w-[40px] h-[40px] rounded-full">
              <FontAwesomeIcon className="text-white" icon={faSearch} />
            </button>
          ) : (
            <div></div>
          )}
          <button className="bg-darkBlue px-[5px] xl:px-4 py-2 rounded-[8px] text-white text-sm font-bold hover:bg-darkBlue/[0.6]">
            Đăng kí
          </button>
          <button className="bg-darkBlue px-[5px] xl:px-4 py-2 rounded-[8px] text-white text-sm font-bold hover:bg-darkBlue/[0.6]">
            Đăng nhập
          </button>
        </div>
      </div>
      <div className="max-w-full h-[40%] bg-orange px-4 xl:px-40 mt-4">
        {isMobile ? (
          <button
            className="flex justify-end items-center h-full w-full py-4"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <FontAwesomeIcon className="text-white text-2xl" icon={faBars} />
          </button>
        ) : (
          <ul className="flex items-center h-full">
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Trang chủ
            </li>
            <li className="text-white bg-transparent hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Thể loại
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Xếp hạng
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Tìm truyện
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Lịch sử
            </li>
          </ul>
        )}
      </div>
      {toggle && isMobile ? (
        <div className="max-w-full bg-orange px-4 xl:px-40">
          <ul className="flex flex-col h-full">
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Trang chủ
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Thể loại
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Xếp hạng
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Tìm truyện
            </li>
            <li className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4">
              Lịch sử
            </li>
          </ul>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
