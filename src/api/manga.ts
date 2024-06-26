import { instance } from "./utils";
import { MangaListResponse, MangaResponse, TagResponse } from "./schema";
import qs from 'qs';

/**
 * getMangaTag function: get list of all manga tags
 *
 * @param {string} path - /manga/tag
 * @returns {Promise}
 */



export const getMangaTag = (path: string) => {
  return instance(path).get<TagResponse>("/");
};

export const getMangaList = ([path, query]: [path: string, query: Object]) => {
  console.log(query)
  console.log(path + query)
  return instance(path + `?${query}`).get<MangaListResponse>("/");
};


export const getManga = ([path, query]: [path: string, query: Object]) => {
  console.log(path + query)
  return instance(path + `?${query}`).get<MangaResponse>("/");
};
