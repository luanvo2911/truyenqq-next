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
  return qs.length ? `?${qs.join("&")}` : "";
};

export const getStaticProps = async () => {

}

export const instance = async (url: string, method: string, query?: Object) => {
  console.log(url + (query ? stringifyQuery(query): ""))
  return axios({
    method: method,
    // url: process.env.NEXT_PUBLIC_PROD === 'dev' ? API_ENDPOINT + url + (query ? stringifyQuery(query): "") : PROXY_SERVER_API,
    url: ("https://truyenqq-proxy.vercel.app/api" + url + (query ? stringifyQuery(query): "")),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "*",
      "Target-URL": process.env.NEXT_PUBLIC_PROD === 'dev' ? "" : API_ENDPOINT + url + (query ? stringifyQuery(query): "")
    }
  })
}