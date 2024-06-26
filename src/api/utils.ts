import axios from "axios";

const API_ENDPOINT = "https://api.mangadex.org";

const corsConfig = "http://localhost:3000"

export const instance = (path: string) => axios.create({
  baseURL: corsConfig,
  headers: {
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "*",
    "Target-URL": API_ENDPOINT + path
    // "Authorization": "Bearer " + process.env.TOKEN_ID
  },
});
