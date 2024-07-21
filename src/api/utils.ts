import axios from "axios";

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


export const instance = async (url: string, method: string, query?: Object) => {
  return axios({
    method: method,
    url: (process.env.NEXT_PUBLIC_API_DEV + url + (query ? stringifyQuery(query): "")),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Headers": "*",
    }
  })
}