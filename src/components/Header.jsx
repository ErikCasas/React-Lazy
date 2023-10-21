import React from "react";
import "../styles/Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <>
      <div className="header-container">
        <h1 className="tittle">lista de pokemons</h1>
        <ul className="navigate">
          <li>
            <Link to="/">inicio</Link>
          </li>

          <li>
            <Link to="/about">sobre nosotros</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
