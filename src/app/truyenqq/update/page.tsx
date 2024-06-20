"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import MangaCard from "@/src/components/MangaCard";
import { useState } from "react";
import { useMangaList } from "@/src/hooks/useMangaList";
import { Manga } from "@/src/api/schema";
import { Pagination } from "antd";

import _ from "lodash";

interface Filter {
  updateState: string[];
  country: string[];
}

export default function Update() {
  const updateState = ["Đang tiến hành", "Hoàn thành"];
  const country = ["Trung Quốc", "Việt Nam", "Hàn Quốc", "Nhật Bản", "Mỹ"];
  const [pagination, setPagination] = useState(0);
  const { mangaListResponse, error, isLoading } = useMangaList({
    limit: 42,
    offset: pagination * 42,
  });

  const [filter, setFilter] = useState<Filter>({
    updateState: [],
    country: [],
  });

  console.log(filter); // get the filter

  return (
    <div className="w-full h-auto px-2 xl:px-40 py-4">
      <div>
        <div className="text-normalBlue flex items-center gap-2">
          <FontAwesomeIcon icon={faFlag} />
          <div className="text-xl font-semibold">Truyện mới cập nhật</div>
        </div>
        <div className="bg-white shadow-lg p-4 flex flex-col gap-2 my-4">
          <div className="flex items-center gap-2">
            <div className="w-1/12">Tình trạng</div>
            <div className="flex gap-2 flex-wrap">
              {updateState.map((state, index) => {
                return (
                  <button
                    className={`p-2 border-2 border-inherit rounded-sm ${
                      filter.updateState.includes(state)
                        ? "bg-orange text-white"
                        : ""
                    }`}
                    key={index}
                    onClick={() => {
                      !filter.updateState.includes(state)
                        ? setFilter({
                            ...filter,
                            updateState: [...filter.updateState, state],
                          })
                        : setFilter({
                            ...filter,
                            updateState: _.remove(filter.updateState, (e) => {
                              return state !== e;
                            }),
                          });
                    }}
                  >
                    {state}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1/12">Quốc gia</div>
            <div className="flex gap-2 flex-wrap">
              {country.map((n, index) => {
                return (
                  <button
                    className={`p-2 border-2 border-inherit rounded-sm ${
                      filter.country.includes(n) ? "bg-orange text-white" : ""
                    }`}
                    key={index}
                    onClick={() => {
                      !filter.country.includes(n)
                        ? setFilter({
                            ...filter,
                            country: [...filter.country, n],
                          })
                        : setFilter({
                            ...filter,
                            country: _.remove(filter.country, (e) => {
                              return n !== e;
                            }),
                          });
                    }}
                  >
                    {n}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 py-4 gap-4">
          {mangaListResponse?.map((manga: Manga, index: number) => {
            return <MangaCard key={index} props={manga} />;
          })}
        </div>
      </div>
      <div className="flex items-center w-full justify-center">
        <Pagination
          className="text-xl"
          current={pagination + 1}
          defaultPageSize={42}
          total={42*200}
          showSizeChanger={false}
          onChange={(page: number, pageSize: number) => {
            setPagination(page - 1);
          }}
        />
      </div>
    </div>
  );
}
