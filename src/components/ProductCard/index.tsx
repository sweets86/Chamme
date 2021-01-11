import React from "react";
import ProductCardStyled from "./ProductCardStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";
import { Link } from "react-router-dom";

interface Props {
  product: any;
  category: string;
}

function ProductCard(props: Props) {
  const category = props.category;
  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <ProductCardStyled>
            <Link
              to={{
                pathname: "/product/" + props.product.id,
                state: category,
              }}
            >
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

export default ProductCard;
