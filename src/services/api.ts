import axios from "axios";

export const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "b3e828f4eabe6d65de91858ada8a713f",
    language: "pt-BR",
  },
});
