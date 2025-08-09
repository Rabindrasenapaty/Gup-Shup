import axios from "axios";

const DB_URL = import.meta.env.VITE_DB_URL;
const DOMAIN = import.meta.env.VITE_APP_DOMAIN; // Add this to .env file

export const axiosinstance = axios.create({
  baseURL: DB_URL,
  withCredentials: true ,
  headers: {
    'Content-Type': 'application/json',
    'domain': DOMAIN,
  }
});
