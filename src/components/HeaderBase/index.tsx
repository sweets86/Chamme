import React from "react";
import { Link } from "react-router-dom";
import HeaderBaseStyled from "./HeaderBaseStyled";

export default function HeaderBase() {
  return (
    <HeaderBaseStyled>
      <Link to={"/"}>
        <h1 className="titleLink">Y3SS</h1>
      </Link>

      <Link to="/products">
        <h4>{"<<"} Products</h4>
      </Link>
    </HeaderBaseStyled>
  );
}
