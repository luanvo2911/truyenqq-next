"use client";

import useSWR from "swr";
import { Manga } from "../api";
import { MangaResponse } from "../api/schema";

const useMangaList = () => {
  const { data, error, isLoading } = useSWR(
    ["/manga", { "contentRating[]": "suggestive", "includes[]": ["cover_art", "author"] }],
    Manga.getMangaList
  );

  const response = data && data.data && (data.data as MangaResponse).data;

  return { response, error, isLoading };
};

export default useMangaList;
