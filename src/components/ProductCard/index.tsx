import React from "react";
import ProductCardStyled from "./ProductCardStyled";

interface Props {
  product: any;
}

export default function ProductCard(props: Props) {
  return (
    <ProductCardStyled>
      <div className="imgDiv">
        <img
          src={require("./../../assets/Products/" + props.product.img).default}
          alt="product img"
        />
      </div>
      <div className="contentDiv">
        <div className="infoDiv">
          <h3>{props.product.name}</h3>
          <h3>{props.product.price} Kr</h3>
        </div>
        <button>Köp</button>
      </div>
    </ProductCardStyled>
  );
}
