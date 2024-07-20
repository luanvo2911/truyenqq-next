// import { createProxyMiddleware } from "http-proxy-middleware";
import axios from "axios";
// Proxy configuration
// const apiProxy = createProxyMiddleware({
//   target: "http://api.mangadex.org",
//   changeOrigin: true,
//   pathRewrite: function (path, req) {
//     return path.replace("/api", "/");
//   },
// });

// export const config = {
//   api: {
//     bodyParser: false, // Disable body parsing to handle binary files
//   },
// };

// Create the API route handler
export default async function handler(req: any, res: any) {
  // return apiProxy(req, res, (result: any) => {
  //   if (result instanceof Error) {
  //     throw result;
  //   }

  //   return res.status(404).send("Not found");
  // });


  return new Promise((resolve, reject) => {
    axios.get('https://api.mangadex.org' + req.url.replace("/api", "/")).then((response) => {
      res.status(200).send(response.data)
      resolve(1)
    })
  })
  
  
}
