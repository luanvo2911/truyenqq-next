"use client";

import logoMobile from "@/public/static/logo-mobile.png";
import logoPC from "@/public/static/logo-pc.png";
import { Manga } from "@/src/api/schema";
import {
  faBars,
  faLightbulb,
  faRectangleXmark,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spin } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MangaAPI } from "../api";
import useIsMobile from "../hooks/useIsMobile";
import useToggle from "../hooks/useToggle";
import MangaSearchCard from "./MangaSearchCard";

export default function NavBar() {
  const isMobile = useIsMobile();
  const { toggle, setToggle } = useToggle();
  const [searchBar, setSearchBar] = useState<boolean>(false);
  const handleClick = () => {
    setToggle(!toggle);
  };
  const [searchKey, setSearchKey] = useState("");
  const [searchResult, setSearchResult] = useState<Manga[] | null>(null);
  useEffect(() => {
    const delayFn = setTimeout(() => {
      if (searchKey !== "") {
        MangaAPI.getManga([
          "/manga",
          {
            title: searchKey,
            "includes[]": ["cover_art", "author"],
            limit: 10,
          },
        ]).then((result) => {
          setSearchResult(result.data?.data);
        });
      }
    }, 2000);

    return () => clearTimeout(delayFn);
  }, [searchKey]);
  return (
    <div className="w-screen min-h-[100px]">
      <div className="max-w-full flex justify-between items-center px-2 xl:px-40 pt-4">
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Image
              unoptimized
              src={isMobile ? logoMobile : logoPC}
              width={isMobile ? 30 : 150}
              height={isMobile ? 30 : 150}
              alt="Logo icon for PC"
              className={`object-cover object-center w-[${
                isMobile ? "30px" : "150px"
              }] h-auto`}
            />
          </Link>
          <div className="border-2 border-orange w-[40px] h-[40px] rounded-full flex items-center justify-center hover:cursor-pointer">
            <FontAwesomeIcon className="text-orange" icon={faLightbulb} />
          </div>
          {isMobile ? (
            <div />
          ) : (
            <div className="flex flex-col">
              <div className="relative">
                <input
                  className="px-4 py-2 w-[400px] border-2 border-orange rounded-[24px] focus:outline-none"
                  placeholder="Bạn muốn tìm truyện gì"
                  value={searchKey}
                  onChange={(e) => {
                    setSearchKey(e.target.value);
                  }}
                />
                <FontAwesomeIcon
                  className="absolute right-3 top-3 text-orange"
                  icon={faSearch}
                />
                {searchKey !== "" ? (
                  <div className="bg-white absolute top-11 w-[400px] z-20 rounded-t-[24px] max-h-[40vh] overflow-y-scroll">
                    {searchResult ? (
                      searchResult.map((item, index) => {
                        return <MangaSearchCard key={index} manga={item} />;
                      })
                    ) : (
                      <div className="flex gap-4 justify-center items-center p-4">
                        <div>Loading ...</div>
                        <Spin />
                      </div>
                    )}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center justify-center gap-4">
          {isMobile ? (
            <button
              className="bg-orange w-[40px] h-[40px] rounded-full"
              onClick={() => {
                setSearchBar(!searchBar);
              }}
            >
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
      {isMobile && searchBar ? (
        <div className="max-w-full flex justify-center mt-4">
          <div className="flex flex-col">
            <div className="relative">
              <input
                className="px-4 py-2 w-[90vw] border-2 border-orange rounded-[24px] focus:outline-none"
                placeholder="Bạn muốn tìm truyện gì"
                value={searchKey}
                onChange={(e) => {
                  setSearchKey(e.target.value);
                }}
              />
              <FontAwesomeIcon
                className="absolute right-3 top-3 text-orange"
                icon={faSearch}
              />
              {searchKey !== "" ? (
                <div className="bg-white absolute top-11 w-[90vw] z-20 rounded-t-[24px] max-h-[40vh] overflow-y-scroll">
                  {searchResult ? (
                    searchResult.map((item, index) => {
                      return <MangaSearchCard key={index} manga={item} />;
                    })
                  ) : (
                    <div className="flex gap-4 justify-center items-center p-4">
                      <div>Loading ...</div>
                      <Spin />
                    </div>
                  )}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
      <div className="max-w-full h-[40%] bg-orange p-4 xl:px-40 mt-4">
        {isMobile ? (
          <button
            className="flex justify-end items-center h-full w-full"
            onClick={handleClick}
          >
            {toggle ? (
              <FontAwesomeIcon
                className="text-white text-2xl"
                icon={faRectangleXmark}
              />
            ) : (
              <FontAwesomeIcon className="text-white text-2xl" icon={faBars} />
            )}
          </button>
        ) : (
          <ul className="flex items-center h-full">
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/truyenqq"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/truyenqq/update"
              >
                Cập nhật
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/truyenqq/search"
                onMouseEnter={() => {
                  console.log("focus");
                }}
              >
                Thể loại
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/"
              >
                Xếp hạng
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/"
              >
                Tìm truyện
              </Link>
            </li>
            <li>
              <Link
                className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
                href="/"
              >
                Lịch sử
              </Link>
            </li>
          </ul>
        )}
      </div>
      {toggle && isMobile ? (
        <div className="max-w-full bg-orange px-4 xl:px-40">
          <ul className="flex flex-col h-full">
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/truyenqq"
              onClick={handleClick}
            >
              Trang chủ
            </Link>
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/truyenqq/update"
              onClick={handleClick}
            >
              Cập nhật
            </Link>
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/truyenqq/search"
              onClick={handleClick}
            >
              Thể loại
            </Link>
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/"
              onClick={handleClick}
            >
              Xếp hạng
            </Link>
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/"
              onClick={handleClick}
            >
              Tìm truyện
            </Link>
            <Link
              className="text-white hover:bg-white/[0.2] hover:cursor-pointer p-4"
              href="/"
              onClick={handleClick}
            >
              Lịch sử
            </Link>
          </ul>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
