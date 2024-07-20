import { create } from "zustand";
import { ChapterImage, ChapterImageResponse, Chapter, ChapterInfoResponse } from "../api/schema";
import { getChapterImage, getChapterInfo } from "../api/chapter";
import _ from "lodash";

const useChapterStore = create<{
  chapter: ChapterImage | null;
  setChapter: (id: string) => void;
  chapterInfo: Chapter | null;
  setChapterInfo: (id: string) => void;
}>((set) => ({
  chapter: null,
  setChapter: (id: string) => {
    getChapterImage(id).then((res: ChapterImageResponse | any) => {
      set((state) => ({
        ...state,
        chapter: _.get(res, ["data", "chapter"]),
      }));
    });
  },
  chapterInfo: null,
  setChapterInfo: (id: string) => {
    getChapterInfo(id).then((res: ChapterInfoResponse | any) => {
      set((state)=>({
        ...state,
        chapterInfo: _.get(res, ["data", "data"])
      }))
    })
  }
}));

export default useChapterStore;
