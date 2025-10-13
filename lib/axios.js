// Contoh di lib/axios.js atau utils/api.js

import axios from "axios";
import { siteConfig } from "@/lib/config";

const apiClient = axios.create({
  baseURL: siteConfig.apiUrl,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default apiClient;
