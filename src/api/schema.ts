export type LocalizedString = Record<string, string>;

export interface TagResponse {
  result: string;
  data: Tag[];
  limit: number;
  offset: number;
  response: string;
  total: number;
}

export interface Tag {
  id: string;
  type: string;
  attributes: TagAttributes;
  relationship: any;
}

export interface TagAttributes {
  name: LocalizedString;
  description: {};
  group: "group" | "genre" | "theme" | "format";
  version: string;
}

export interface MangaResponse {
  result: string;
  response: string;
  data: Manga[];
  limit: number;
  offset: number;
  total: number;
}

export interface Manga {
  id: string;
  type: string;
  attributes: MangaAttributes;
  relationships: any;
}

export interface MangaAttributes {
  title: LocalizedString;
  altTitles: LocalizedString[];
  description: LocalizedString;
  isLocked: boolean;
  links: {};
  originalLanguage: string;
  lastUpdated: string;
  lastChapter: string;
  pulicationDemographic: string;
  status: string;
  year: number;
  contentRating: "suggestive" | "erotica" | "pornographic" | "safe";
  tags: Tag[];
  state: string;
  // chapterNumberResetOnNewVolume: boolean;
  createdAt: Date;
  updateAt: Date;
  version: number;
  // availableTranslatedLanguages: string[];
  latestUploadedChapter: string;
}

export interface CoverResponse {
  result: string;
  response: string;
  data: Cover;
}

export interface Cover {
  id: string;
  type: "cover_art";
  attributes: {
    description: string;
    volume: string;
    filename: string;
    local: string;
    createdAt: Date;
    updatedAt: Date;
    version: number;
  };
}
