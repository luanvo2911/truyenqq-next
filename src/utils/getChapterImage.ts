import { ChapterImage } from "../api/schema";
import _ from "lodash";

export const getChapterArt = (chapter: ChapterImage | null) => {
  if (chapter) {
    const hash = _.get(chapter, "hash");
    const data: string[] = _.get(chapter, "data");
    const dataSaver: string[] = _.get(chapter, "dataSaver");
    return data.map(
      (url: string) => `https://uploads.mangadex.org/data/${hash}/${url}`
    );
  }
};
