import useSWR from "swr";
import { Manga } from "@/src/api";
import { Tag, TagResponse } from "../api/schema";

const useTag = () => {
  const { data, error, isLoading } = useSWR("/manga/tag", Manga.getMangaTag);

  let response: Tag[] | undefined =
    data && data.data && (data.data as TagResponse).data;
  return { response, error, isLoading };
};

export default useTag;
