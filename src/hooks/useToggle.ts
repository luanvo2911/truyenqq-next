"use client"
import { useState } from "react";

export default function useToggle() {
  const [toggle, setToggle] = useState(false);

  return {toggle, setToggle};
}