import React from "react";
import { Link } from "react-router-dom";
import HeaderDarkStyled from "./HeaderDarkStyled";

export default function HeaderDark() {
  return (
    <HeaderDarkStyled>
      <Link to={"/"}>
        <h1 className="titleLink">Chameleone</h1>
      </Link>
      <Link to={"/order"}>
        <h3 className="counter">1</h3>
      </Link>
    </HeaderDarkStyled>
  );
}
