import { instance } from "./utils";

export const getChapterList = (uuid: string) => {
  const path = `/manga/${uuid}/feed`;
  return instance(path, "get", {
    order: {
      chapter: "desc",
    },
    limit: 500,
    // "translatedLanguage[]": ["vi"]
  });
};

export const getChapterImage = (uuid: string) => {
  const path = `/at-home/server/${uuid}`;
  return instance(path, "get");
};

export const getChapterInfo = (chapterUuid: string) => {
  const path = `/chapter/${chapterUuid}`;
  return instance(path, "get", {
    "includes[]": ["manga", "user"],
  });
};
