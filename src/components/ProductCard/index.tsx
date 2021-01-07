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
        <h3>{props.product.name}</h3>
        <div className="price-and-btn-div">
          <h3>{props.product.price} Kr</h3>
          <button>Köp</button>
        </div>
      </div>
    </ProductCardStyled>
  );
}
