import React from "react";
import ProductCardStyled from "./ProductCardStyled";
import Img from "../../assets/Blog/beach.jpg";

interface Props {
  name: string;
}

export default function ProductCard(props: Props) {
  return (
    <ProductCardStyled>
      <div className="imgDiv">
        <img src={Img} alt="some pic" />
      </div>
      <div className="contentDiv">
          <div className="infoDiv">
          <h3>{props.name}</h3>
          <h3>199 Kr</h3>
          </div>
          <button>Köp</button>
      </div>
    </ProductCardStyled>
  );
}
