import { Manga } from "../api/schema";
import _ from 'lodash';

const getCoverArt = (manga: Manga) => {
  const fileName = _.get(_.filter(manga.relationships, ['type', 'cover_art'])[0], ["attributes", "fileName"]);
  return fileName ? `https://uploads.mangadex.org/covers/${_.get(manga, ["id"])}/${fileName}` : 'https://placewaifu.com/image/200';
};


export default getCoverArt;