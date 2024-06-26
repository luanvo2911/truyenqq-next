import { CoverArt, Manga } from "../api/schema";
import placeholderImage from "@/public/static/placeholder.png";
import _ from "lodash";

const getCoverArt = (manga: Manga | Manga[] | undefined | null) => {
  if (manga) {
    const fileName: CoverArt = _.get(
      _.filter(_.get(manga, "relationships"), ["type", "cover_art"])[0],
      ["attributes", "fileName"]
    );
    return fileName
      ? `https://uploads.mangadex.org/covers/${_.get(manga, [
          "id",
        ])}/${fileName}`
      : "https://placewaifu.com/image/200";
  } else return placeholderImage.src;
};

export default getCoverArt;
