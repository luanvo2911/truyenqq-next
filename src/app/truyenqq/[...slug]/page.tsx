import React from "react";
import type { Metadata } from "next";
import Slug from "./Slug";


export const metadata: Metadata = {
  title: "",
  description: "Manga Title",
};


export default function Page({ params }: { params: { slug: string[] } }) {
  metadata.title = decodeURIComponent(params.slug[1]).replaceAll("-", " ")
  return <Slug params={params} />;
}
