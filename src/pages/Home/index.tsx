import { FaPlus, FaSearch } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";
import { useFetchMovies } from "../../services/Api";
import { Movie } from "../../types/MovieType";

export default function Home() {
  const { data, isLoading, isError } = useFetchMovies(1);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div>
      <div className="containerHeader bg">
        <div className="navLinks">
          <Link to={"/"} className="iconLogo">
            <img src="/logo.svg" alt="Logo Pop" />
          </Link>
          <Link to={"#"} className="links">
            Filmes
          </Link>
          <Link to={"#"} className="links">
            Séries
          </Link>
          <Link to={"#"} className="links">
            Pessoas
          </Link>
          <Link to={"#"} className="links">
            Mais
          </Link>
        </div>

        <div className="navLinks">
          <Link to={"#"}>
            <FaPlus className="iconPlus" />
          </Link>
          <Link to={"#"} className="links">
            Pessoas
          </Link>
          <Link to={"#"} className="links">
            PT
          </Link>
          <Link to={"#"} className="links">
            Entrar
          </Link>
          <Link to={"/login"} className="links">
            Junte-se ao POP
          </Link>
          <Link to={"#"}>
            <FaSearch className="iconSearch" size={20} />
          </Link>
        </div>
      </div>
      <div className="">
        {data.results.map((movie: Movie) => (
          <div key={movie.id}>
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <p>{movie.overview}</p>
            <p>Popularidade: {movie.popularity}</p>
            <p>Data de lançamento: {movie.release_date}</p>
            <p>Contagem de votos: {movie.vote_count}</p>
            <p>Média de votos: {movie.vote_average}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
