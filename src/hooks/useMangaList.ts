"use client";

import useSWR from "swr";
import { Manga } from "../api";
import { MangaResponse, MangaListResponse } from "../api/schema";

const useSpotlightList = ({ limit, offset }: { limit: number; offset: number }) => {
  const { data, error, isLoading } = useSWR(
    [
      "/manga",
      {
        "contentRating[]": "suggestive",
        "includes[]": ["cover_art", "author"],
        offset: offset,
        limit: limit,
        order: { updatedAt: "desc" },
      },
      // "contentRating[]=suggestive&includes[]=cover_art&includes[]=author&order[updatedAt]=desc"
    ],
    Manga.getMangaList
  );

  const spotLightResponse = 
    (data && data.data && (data.data as MangaListResponse).data) instanceof Array ? data && data.data && (data.data as MangaListResponse).data : [];

  const spotLightListLoading = isLoading;
  const spotLightListError = error;

  return { spotLightResponse, spotLightListError, spotLightListLoading };
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
      // `includes[]=cover_art&includes[]=author&order[updatedAt]=desc&offset=${offset}&limit=${limit}`
    ],
    Manga.getMangaList
  );
  const mangaListResponse =
    data && data.data && (data.data as MangaListResponse).data;

  const mangaListLoading = isLoading;
  const mangaListError = error;

  return { mangaListResponse, mangaListError, mangaListLoading };
};

const useMangaInfo = (id: string) => {
  const { data, error, isLoading } = useSWR(
    [
      `/manga/${id}`,
      {
        "includes[]": ["cover_art", "author"],
      },
    ],
    Manga.getManga
  );
  const mangaResponse = data && data.data && (data.data as MangaResponse).data;

  return { mangaResponse, error, isLoading };
};

export { useSpotlightList, useMangaList, useMangaInfo };
