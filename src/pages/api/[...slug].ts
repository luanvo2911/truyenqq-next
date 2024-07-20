// pages/api/proxy.js
import { createProxyMiddleware } from "http-proxy-middleware";

// Proxy configuration
const apiProxy = createProxyMiddleware({
  target: "http://api.mangadex.org",
  changeOrigin: true,
  pathRewrite: function (path, req) {
    return path.replace("/api", "/");
  },
});

// Create the API route handler
export default function handler(req: any, res: any) {
  return apiProxy(req, res, (result: any) => {
    if (result instanceof Error) {
      throw result;
    }

    return res.status(404).send("Not found");
  });
}

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle binary files
  },
};
