import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.melhorrastreio.com.br/api/v1/trackings/",
  
});
