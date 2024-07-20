import {
  Manga,
  StatisticsResponse,
  Statistic,
  Chapter,
  MangaFeedResponse,
} from "../api/schema";
import { create } from "zustand";
import { getMangaStat } from "../api/stat";
import { getChapterList } from "../api/chapter";

import _ from "lodash";

const useMangaStore = create<{
  title: string;
  setTitle: (title: string) => void;
  statistic: Statistic | null;
  setStatistic: (id: string) => void;
  chapterList: Chapter[];
  setChapterList: (id: string) => void;
  isLoading: boolean;
}>((set) => ({
  title: "",
  setTitle: (title: string) => {
    set((state) => ({
      ...state,
      title: title,
    }));
  },
  statistic: null,
  isLoading: true,
  chapterList: [],
  setChapterList: (id: string) => {
    getChapterList(id).then((res: MangaFeedResponse | any) => {
      set((state) => ({
        ...state,
        chapterList: _.get(res, ["data", "data"]),
      }));
    });
  },
  setStatistic: (id: string) => {
    getMangaStat(id).then((res: StatisticsResponse | any) => {
      set((state) => ({
        ...state,
        statistic: _.get(res, ["data", "statistics", id]),
        isLoading: true,
      }));
    });
  },
}));

export default useMangaStore;
