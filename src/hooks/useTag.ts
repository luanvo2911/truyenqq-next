import useSWR from "swr";
import { MangaAPI } from "@/src/api";
import { Tag, TagResponse } from "../api/schema";

const useTag = () => {
  const { data, error, isLoading } = useSWR("/manga/tag", MangaAPI.getMangaTag);

  let response: Tag[] | undefined =
    data && data.data && (data.data as TagResponse).data;
  return { response, error, isLoading };
};

export default useTag;
