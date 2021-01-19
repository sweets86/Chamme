import React from "react";
import OrderCard from "../OrderCard";
import OrderStyled from "./OrderStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";

export default function Order() {
  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <OrderStyled>
            <div className="orderNav">
              <h2>Dina Varor</h2>
            </div>
            {contextData.cartItems.map((cartItem, index) => {
                let product = cartItem.product
              return <OrderCard product={product} key={index} />;
            })}
            <div className="orderTot">
              <div className="frakt">
                <h3>Frakt</h3>
                <h3>49 kr</h3>
              </div>
              <div className="totalt">
                <h2>Totalt</h2>
                <h2>{contextData.totalPrice()}</h2>
              </div>
            </div>
          </OrderStyled>
        );
      }}
    </CartConsumer>
  );
}
