import axios from "axios";
import { useEffect, useState } from "react";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
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
          "https://api.themoviedb.org/3/trending/movie/day",
          {
            params: {
              api_key: "308669bdff0df0fa1c1cc92c06f8d1dd",
              language: "pt-BR", // Definindo o idioma para português do Brasil
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
              <li key={movie.id}>
                <h4>{movie.title}</h4>
                {movie.poster_path && (
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                    style={{ width: "200px", height: "300px" }}
                  />
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
