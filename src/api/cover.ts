import { instance } from "./utils";
import { CoverResponse } from "./schema";

export const getCoverID = (path: string) => {
  return instance.get<CoverResponse>(path);
}