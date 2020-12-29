import React from "react";
import { Link } from "react-router-dom";
import HeaderMainStyled from "./HeaderMainStyled";

export default function HeaderMain() {
  return (
    <HeaderMainStyled>
      <div className="navbar">
        <Link to={"/"}>
          <h1 className="titleLink">Chameleone</h1>
        </Link>
        <Link to={"/products"}>
          <h3 className="menu">Meny</h3>
        </Link>
      </div>
    </HeaderMainStyled>
  );
}
