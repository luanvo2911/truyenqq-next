import axios from "axios";

const API_ENDPOINT = "https://api.mangadex.org";

const PROXY_SERVER_API = "http://localhost:8080";

const stringifyArrayQuery = (name: string, array?: string[]) => {
  let qs = "";

  if (array && array.length > 0) {
    array.forEach((item) => {
      qs === "" ? (qs += `${name}=${item}`) : (qs += `&${name}=${item}`);
    });
  }
  return qs;
};

const stringifyQuery = (query: { [key: string]: any }) => {
  const qs: string[] = [];
  if (query && Object.keys(query).length > 0) {
    Object.keys(query).forEach((key) => {
      if (query[key] instanceof Array) {
        qs.push(stringifyArrayQuery(key, query[key]));
      } else if (key === "order") {
        const order = query[key];
        Object.keys(order).map((item) => {
          qs.push(`order[${item}]=${order[item]}`);
        });
      } else {
        qs.push(`${key}=${query[key]}`);
      }
    });
  }
  console.log(qs.length ? `?${qs.join("&")}` : "");
  return qs.length ? `?${qs.join("&")}` : "";
};

export const instance = (path: string, query: Object) =>
  axios.create({
    baseURL: PROXY_SERVER_API,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "*",
      "Target-URL": API_ENDPOINT + path + stringifyQuery(query),
    },
  });
