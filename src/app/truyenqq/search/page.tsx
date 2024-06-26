"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useTag from "@/src/hooks/useTag";
import _ from "lodash";
import { Tag } from "@/src/api/schema";

interface Filter {
  genre: String;
  updateState: String[];
  country: String[];
  sort: String;
}

export default function Search() {
  const {response, error, isLoading} = useTag();
  const genre: Tag[] = response ?? [];
  const updateState = ["Đang tiến hành", "Hoàn thành"];
  const country = ["Trung Quốc", "Việt Nam", "Hàn Quốc", "Nhật Bản", "Mỹ"];
  const sort = [
    "Ngày đăng giảm dần",
    "Ngày đăng tăng dần",
    "Ngày cập nhật giảm dần",
    "Ngày cập nhật tăng dần",
  ];
  const [filter, setFilter] = useState<Filter>({
    genre: "Oneshot",
    updateState: [],
    country: [],
    sort: sort[0],
  });

  console.log(filter);

  return (
    <div className="w-full h-auto px-2 xl:px-40 py-4">
      <div className="flex flex-col gap-4">
        <div className="text-normalBlue flex items-center gap-2">
          <FontAwesomeIcon icon={faFlag} />
          <div className="text-xl font-semibold">
            Tìm kiếm thể loại: Truyện {filter.genre}
          </div>
        </div>

        <div className="bg-white shadow-lg p-4">
          Thể loại phiêu lưu, mạo hiểm, thường là hành trình của các nhân vật
        </div>

        <div className="bg-white shadow-lg p-4 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <div className="w-1/12">Thể loại</div>
            <div>
              <select
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    genre: e.target.value,
                  });
                }}
                className="p-2 border-2 border-inherit rounded-sm"
              >
                {genre?.map((g: Tag, index) => {
                  const tagName = _.get(g, ['attributes', 'name', 'en'])
                  return (
                    <option key={index} value={tagName}>
                      {tagName}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
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
          <div className="flex items-center gap-2">
            <div className="w-1/12">Sắp xếp</div>
            <div>
              <select
                className="p-2 border-2 border-inherit rounded-sm"
                onChange={(e) => {
                  setFilter({
                    ...filter,
                    sort: e.target.value,
                  });
                }}
              >
                {sort.map((s, index) => {
                  return (
                    <option key={index} value={s}>
                      {s}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
