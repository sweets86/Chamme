import React, { useContext, useEffect, useState } from "react";
import OrderCardStyled from "./OrderCardStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  product: any;
  category: any;
  index: number;
  quantity: number;
}

export default function OrderCard(props: Props) {
  const context = useContext(CartContext);
  const [showQuantityHandler, setShowQuantityHandler] = useState(false);
  const [quantityHandler, setQuantityHandler] = useState(props.quantity);
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");

  useEffect(() => {
    context.extras
      .filter((extra) => extra.productId === props.product.id)
      .map((extra: any, index: number) => {
        let color = extra.extrasColor;
        let size = extra.extrasSize;

        setExtrasColor(color);
        setExtrasSize(size);
        return console.log(index);
      });

    if (props.category !== "T-shirts") {
      setShowQuantityHandler(true);
    }
  }, [context.extras, props.category, props.product.id]);

  function increaseCountHandler(product: any, index: number) {
    console.log(index);
    setQuantityHandler(function (quantity) {
      return quantity + 1;
    });
    return context.addProductToCart(
      product,
      extrasColor,
      extrasSize,
      product.id,
      index
    );
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
    decreaseCountHandler(product, index);
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
          {showQuantityHandler ? (
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
                onClick={() => increaseCountHandler(props.product, props.index)}
              >
                +
              </span>
            </div>
          ) : null}

          <div className="priceDiv">{props.product.price} Kr</div>
        </div>
        <div className="if-t-shirts">
          {context.extras
            .filter((extra) => extra.productId === props.product.id)
            .map((extra, index) => {
              let color = extra.extrasColor;
              let size = extra.extrasSize;
              return (
                <div key={index}>
                  <h4>{color}</h4>
                  <h4>{size}</h4>
                  <h4>{index}</h4>
                </div>
              );
            })}
        </div>
      </div>
    </OrderCardStyled>
  );
}
