import axios from "axios";

const API_ENDPOINT = "https://api.mangadex.org";

console.log({"Authorization": "Bearer " + process.env.TOKEN_ID});

export const instance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    // "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "*",
    "Authorization": "Bearer " + process.env.TOKEN_ID
  },
});
