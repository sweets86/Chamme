import React, { useContext, useState } from "react";
import OrderCardExtraStyled from "./OrderCardExtraStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  product: any;
  index: number;
  quantity: number;
  count: number;
}

export default function OrderCardExtra(props: Props) {
  /* const count = props.count; */
  /* const quantity = props.quantity; */

  /* const individualCount = (count * quantity) / quantity */
  
  const context = useContext(CartContext);
  /* const [quantityHandler, setQuantityHandler] = useState(quantity);

  function increaseCountHandler(product: any) {
    setQuantityHandler(function (quantity) {
      return quantity + 1;
    });
    context.addProductToCart(product);
  }

  function decreaseCountHandler(product: any, index: number) {
    setQuantityHandler((quantity) => {
      if (quantity > 0) {
        return quantity - 1;
      }
      return 0;
    });
    context.deleteFromCart(product, index);
  } */

  /* const deleteProduct = (product: any, index: number) => {
    context.deleteFromCart(product, index);
    console.log(context.cartItems);
  }; */

  return (
    <div>
      {context.extras
        .filter((extra) => extra.productId === props.product.id)
        .map((extra, index) => {
          return (
            <OrderCardExtraStyled key={index}>
              <div className="imgDiv">
                {
                  <img
                    src={
                      require("../../assets/Products/" + props.product.img)
                        .default
                    }
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
                        /* onClick={() =>
                          deleteProduct(props.product, props.index)
                        } */
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="titleDiv">{<h3>{props.product.name}</h3>}</div>

                <div className="bottomDiv">
                  {/* <div className="quantityDiv">
                    <span
                      className="minus"
                      onClick={() =>
                        decreaseCountHandler(props.product, props.index)
                      }
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
                  </div> */}
                  <div className="if-t-shirts">
                    <h4>{extra.extrasColor}</h4>
                    <h4>{extra.extrasSize}</h4>
                  </div>
                  <div className="priceDiv">{props.product.price} Kr</div>
                </div>
              </div>
            </OrderCardExtraStyled>
          );
        })}
    </div>
  );
}

