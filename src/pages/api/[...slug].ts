// proxy server to dodge CORS
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from "axios";


// Create the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  return new Promise((resolve, reject) => {
    axios.get('https://api.mangadex.org' + req.url?.replace("/api", "/")).then((response) => {
      res.status(200).send(response.data)
      resolve(1)
    })
  })
  
}
