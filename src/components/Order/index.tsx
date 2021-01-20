import React, { useContext, useEffect } from "react";
import OrderCard from "../OrderCard";
import OrderStyled from "./OrderStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";
import { CartContext } from "../../contexts/cartContext";

export default function Order() {
  const context = useContext(CartContext);

  useEffect(() => {
    const checkForExtras = context.extras;
    checkForExtras.map((extrasObj) => {
      let extrasObject = extrasObj;

      return console.log(extrasObject);
    });
  });

  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <OrderStyled>
            <div className="orderNav">
              <h2>Dina Varor</h2>
            </div>
            {contextData.cartItems.map((cartItem, index) => {
              let product = cartItem.product;
              let quantity = cartItem.quantity;
              let key = cartItem.product.id;
              return (
                <OrderCard
                  product={product}
                  key={key}
                  index={index}
                  quantity={quantity}
                />
              );
            })}
            {contextData.cartItems.length ? (
              <div className="orderTot">
                <div className="totalt">
                  <h2>Summa</h2>
                  <h2>{contextData.totalPrice()} Kr</h2>
                </div>
                <div className="tax">
                  <h3>varav moms 25%</h3>
                  <h3>{contextData.getVAT()} Kr</h3>
                </div>
                <div className="frakt">
                  <h3>Frakt</h3>
                  <h3>49 kr</h3>
                </div>
                <div className="totalt">
                  <h2>Totalt</h2>
                  <h2>{contextData.totalPrice()} + Frakt Kr</h2>
                </div>
              </div>
            ) : null}
          </OrderStyled>
        );
      }}
    </CartConsumer>
  );
}
