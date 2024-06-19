import axios from "axios";


const API_ENDPOINT = 'https://api.mangadex.org';

export const instance = axios.create({
  baseURL: API_ENDPOINT,
  headers: {
    'Content-Type': 'application/json'
  }
})



