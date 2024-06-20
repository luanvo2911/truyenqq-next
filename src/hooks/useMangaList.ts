"use client";

import useSWR from "swr";
import { Manga } from "../api";
import { MangaResponse } from "../api/schema";

const useSpotlightList = () => {
  const { data, error, isLoading } = useSWR(
    [
      "/manga",
      {
        "contentRating[]": "suggestive",
        "includes[]": ["cover_art", "author"],
        order: { updatedAt: "desc" },
      },
    ],
    Manga.getMangaList
  );

  const spotLightResponse =
    data && data.data && (data.data as MangaResponse).data;

  return { spotLightResponse, error, isLoading };
};

const useMangaList = ({ limit, offset }: { limit: number; offset: number }) => {
  const { data, error, isLoading } = useSWR(
    [
      "/manga",
      {
        "includes[]": ["cover_art", "author"],
        offset: offset,
        limit: limit,
        order: { updatedAt: "desc" },
      },
    ],
    Manga.getMangaList
  );
  const mangaListResponse =
    data && data.data && (data.data as MangaResponse).data;

  return { mangaListResponse, error, isLoading };
};

export { useSpotlightList, useMangaList };
