import { create } from "zustand";
import { ChapterImage, ChapterImageResponse } from "../api/schema";
import { getChapterImage } from "../api/chapter";
import _ from "lodash";

const useChapterStore = create<{
  chapter: ChapterImage | null;
  setChapter: (id: string) => void;
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
}));

export default useChapterStore;
