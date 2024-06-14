import { StaticImageData } from "next/image";

export interface Poster{
  image: StaticImageData,
  title: string,
  tags: string[],
  description: string,
  author: string
}