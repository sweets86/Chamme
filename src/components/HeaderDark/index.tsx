import React from "react";
import { Link } from "react-router-dom";
import { navbar, titleLink, counter } from "./HeaderDarkStyled";

export default function HeaderDark() {
  return (
    <div style={navbar}>
      <Link to={"/"}>
        <h1 style={titleLink}>Chameleone</h1>
      </Link>
      <Link to={"/order"}>
        <h3 style={counter}>Counter</h3>
      </Link>
    </div>
  );
}
