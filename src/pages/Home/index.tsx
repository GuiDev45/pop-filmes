import { FaPlus, FaSearch } from "react-icons/fa";
import "./style.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="containerHeader">
      <div className="navLinks gap-4">
        <Link to={"/"}>
          <img src="/public/logo.svg" alt="Logo Pop" />
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

      <div className="navLinks gap-4">
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
  );
}
