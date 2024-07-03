import { instance } from "./utils";

export const getChapterList = (uuid: string) => {
  const path = `/manga/${uuid}/feed`;
  return instance(path, "get", {
    order: {
      chapter: "desc",
    },
    limit: 500
  });
};

export const getChapterImage = (uuid: string) => {
  const path = `/at-home/server/${uuid}`;
  return instance(path, "get");
};
