import React from "react";
import { Link } from "react-router-dom";
import HeaderBaseStyled from "./HeaderBaseStyled";

export default function HeaderBase() {
  return (
    <HeaderBaseStyled>
      <Link to={"./"}>
        <h1>Chameleone</h1>
      </Link>
    </HeaderBaseStyled>
  );
}
