import { useState } from "react";
import { useFetchMovies } from "../services/Api";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

export default function TestApi() {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, isLoading, isError } = useFetchMovies(pageNumber);

  const nextPage = () => {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  };

  const prevPage = () => {
    setPageNumber((prevPageNumber) => Math.max(prevPageNumber - 1, 1));
  };

  if (isLoading) return <div>Carregando...</div>;
  if (isError) return <div>Erro ao carregar dados da API</div>;

  return (
    <div>
      <h2>Teste de API do The Movie Database</h2>
      {data && (
        <div>
          <h3>Filmes</h3>
          <button onClick={prevPage} disabled={pageNumber === 1}>
            Página Anterior
          </button>
          <button onClick={nextPage}>Próxima Página</button>
          <ul>
            {data.results.map((movie: Movie) => (
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
