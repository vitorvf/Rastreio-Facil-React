import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.melhorrastreio.com.br/api/v1/trackings/",
  // headers: {
  //   Authorization: 'Bearer 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',
  // },
});
