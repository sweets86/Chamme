import React from "react";
import { Link } from "react-router-dom";
import HeaderDarkStyled from "./HeaderDarkStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";

export default function HeaderDark() {
  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <HeaderDarkStyled>
            <Link to={"/"}>
              <h1 className="titleLink">Chameleone</h1>
            </Link>
            <Link to={"/order"}>
              <h3 className="counter">{contextData.countCart()}</h3>
            </Link>
          </HeaderDarkStyled>
        );
      }}
    </CartConsumer>
  );
}
