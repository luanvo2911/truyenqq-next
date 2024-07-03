import { instance } from "./utils";

export const getMangaStat = (uuid: string) => {
  const path = `/statistics/manga/${uuid}`;
  return instance(path, "get");
};
