import React from "react";
import ProductCardStyled from "./ProductCardStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

interface Props {
  product: any;
}

export default function ProductCard(props: Props) {
  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <ProductCardStyled>
            <Link to={"/product/" + props.product.name}>
              <div className="imgDiv">
                <img
                  src={
                    require("./../../assets/Products/" + props.product.img)
                      .default
                  }
                  alt="product img"
                />
              </div>
            </Link>
            <div className="contentDiv">
              <h3>{props.product.name}</h3>
              <div className="price-and-btn-div">
                <h3>{props.product.price} Kr</h3>
                <button
                  onClick={() => contextData.addProductToCart(props.product)}
                >
                  Köp
                </button>
              </div>
            </div>
          </ProductCardStyled>
        );
      }}
    </CartConsumer>
  );
}
