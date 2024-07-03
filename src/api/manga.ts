import { instance } from "./utils";
import { MangaListResponse, MangaResponse, TagResponse } from "./schema";

/**
 * getMangaTag function: get list of all manga tags
 *
 * @param {string} path - /manga/tag
 * @returns {Promise}
 */

export const getMangaTag = (path: string) => {
  return instance(path, "get");
};

export const getMangaList = ([path, query]: [path: string, query: Object]) => {
  return instance(path, "get", query);
};

export const getManga = ([path, query]: [path: string, query: Object]) => {
  return instance(path, "get", query);
};
