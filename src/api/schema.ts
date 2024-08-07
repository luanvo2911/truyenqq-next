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

export interface MangaListResponse {
  result: string;
  response: string;
  data: Manga[];
  limit: number;
  offset: number;
  total: number;
}

export interface MangaResponse {
  result: string;
  response: string;
  data: Manga;
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
  createdAt: string;
  updatedAt: string;
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
    createdAt: string;
    updatedAt: string;
    version: number;
  };
}

export interface Author {
  id: string;
  type: "author";
  attributes: {
    name: string;
  };
}

export interface CoverArt {
  id: string;
  type: "cover_art";
  attributes: {
    fileName: string;
  };
}

export interface StatisticsResponse {
  result: string;
  statistics: Record<string, Statistic>;
}

export interface Statistic {
  comments: {
    threadId: number;
    repliesCount: number;
  } | null;
  rating: {
    average: number;
    bayesian: number;
  };
  follows: number;
}

export interface MangaFeedResponse {
  result: string;
  response: string;
  data: Chapter[];
}

export interface ChapterInfoResponse{
  result: string;
  response: string;
  data: Chapter;
}

export interface Chapter {
  id: string;
  type: string;
  attributes: ChapterAttributes;
}

export interface ChapterAttributes {
  volume: number | null;
  chapter: number | null;
  title: number | null;
  translatedLanguage: string;
  externalUrl: string | null;
  publishAt: string;
  readableAt: string;
  createdAt: string;
  updatedAt: string;
  pages: number;
  version: number;
  relationships: any;
}

export interface ChapterImageResponse {
  result: string;
  baseUrl: string;
  chapter: ChapterImage;
}

export interface ChapterImage {
  hash: string;
  data: string[];
  dataSaver: string[];
}
