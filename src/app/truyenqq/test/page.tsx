"use client"

import useTag from "@/src/hooks/useTag";

import { useEffect, useState } from "react";

export default function Page () {
  const {response, error, isLoading} = useTag();
  console.log({response, error, isLoading})

  return <div>page</div>;
};

