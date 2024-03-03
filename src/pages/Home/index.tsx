import { FaPlus, FaSearch } from "react-icons/fa";
import "./style.css";

export default function Home() {
  return (
    <div className="containerHeader">
      <div className="navLinks gap-4">
        <a href="#">
          <img src="/public/logo.svg" alt="Logo Pop" />
        </a>
        <a href="#">Filmes</a>
        <a href="#">Séries</a>
        <a href="#">Pessoas</a>
        <a href="#">Mais</a>
      </div>

      <div className="navLinks gap-4">
        <a href="#">
          <FaPlus className="iconPlus" />
        </a>
        <a href="#">PT</a>
        <a href="#">Entrar</a>
        <a href="#">Junte-se ao POP</a>
        <a href="#">
          <FaSearch className="iconSearch" size={20} />
        </a>
      </div>
    </div>
  );
}
