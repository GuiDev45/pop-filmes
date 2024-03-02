import axios from "axios";
import { useQuery } from "react-query";

const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export const useFetchMovies = (pageNumber: number) => {
  return useQuery(["movies", pageNumber], async () => {
    const response = await axios.get(`${API_URL}/trending/movie/day`, {
      params: {
        api_key: API_KEY,
        language: "pt-BR",
        page: pageNumber,
      },
    });
    return response.data;
  });
};
