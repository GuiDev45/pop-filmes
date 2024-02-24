import axios from "axios";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
}

type MovieApiResponse = {
  results: Movie[];
};

export default function TestApi() {
  const [data, setData] = useState<MovieApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<MovieApiResponse>(
          "https://api.themoviedb.org/3/movie/popular",
          {
            params: {
              api_key: import.meta.env.VITE_API_KEY,
            },
            headers: {
              Authorization: `Bearer ${import.meta.env.VITE_JWT_TOKEN}`,
            },
          },
        );
        setData(response.data);
      } catch (error) {
        setError("Erro ao carregar dados da API");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Teste de API do The Movie Database</h2>
      {error && <p>{error}</p>}
      {data && (
        <div>
          <h3>Filmes</h3>
          <ul>
            {data.results.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
