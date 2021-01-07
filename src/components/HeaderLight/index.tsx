import React from "react";
import { Link } from "react-router-dom";
import HeaderLightStyled from "./HeaderLightStyled";

export default function HeaderLight() {
  return (
    <HeaderLightStyled>
      <Link to={"/"}>
        <h1 className="titleLink">Chameleone</h1>
      </Link>
      <Link to={"/order"}>
        <h3 className="counter">Counter</h3>
      </Link>
    </HeaderLightStyled>
  );
}
