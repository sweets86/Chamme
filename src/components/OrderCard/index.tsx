import React, { useContext, useState} from "react";
import OrderCardStyled from "./OrderCardStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  product: any;
  index: number;
  quantity: number;
}

export default function OrderCard(props: Props) {
  const context = useContext(CartContext);
  const [quantityHandler, setQuantityHandler] = useState(props.quantity);

  function increaseCountHandler(product: any) {
    setQuantityHandler(function (quantity) {
      return quantity + 1;
    });
    /* context.addProductToCart(product); */
  }

  function decreaseCountHandler(product: any, index: number) {
    setQuantityHandler((quantity) => {
      if (quantity > 0) {
        return quantity - 1;
      }
      return 0;
    });
    context.deleteFromCart(product, index);
  }

  const deleteProduct = (product: any, index: number) => {
    /* context.deleteFromCart(product, index); */
    decreaseCountHandler(product, index)
    console.log(context.cartItems);
  };

  return (
    <OrderCardStyled>
      <div className="imgDiv">
        {
          <img
            src={require("../../assets/Products/" + props.product.img).default}
            alt="product img"
          />
        }
      </div>
      <div className="contentDiv">
        <div className="topDiv">
          {<h4>{props.product.brand}</h4>}
          <div className="deleteDiv">
            <div className="deleteBtnDiv">
              <div
                className="deleteBtn"
                onClick={() => deleteProduct(props.product, props.index)}
              ></div>
            </div>
          </div>
        </div>
        <div className="titleDiv">{<h3>{props.product.name}</h3>}</div>
        <div className="bottomDiv">
          <div className="quantityDiv">
            <span
              className="minus"
              onClick={() => decreaseCountHandler(props.product, props.index)}
            >
              -
            </span>
            <span className="quantity">{quantityHandler}</span>
            <span
              className="plus"
              onClick={() => increaseCountHandler(props.product)}
            >
              +
            </span>
          </div>
          <div className="priceDiv">{props.product.price} Kr</div>
        </div>
      </div>
    </OrderCardStyled>
  );
}
