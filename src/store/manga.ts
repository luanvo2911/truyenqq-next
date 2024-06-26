import { Manga } from "../api/schema";
import { create } from "zustand";

const useMangaStore = create<{
  manga: Manga | null;
  setManga: (manga: Manga) => void;
}>((set) => ({
  manga: null,
  setManga: (manga: Manga) => set((state) => ({ ...state, manga: manga })),
}));

export default useMangaStore;