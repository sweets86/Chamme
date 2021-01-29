import React from "react";
import OrderCard from "../OrderCard";
import OrderStyled from "./OrderStyled";
import { CartConsumer, ContextState } from "../../contexts/cartContext";

/* interface Props {
  deliveryOption: (deliveryOption: any) => void;
}
 */

export default function Order() {

  return (
    <CartConsumer>
      {(contextData: ContextState) => {
        return (
          <OrderStyled>
            {console.log()}

            <div className="orderNav">
              <h2>Dina Varor</h2>
            </div>
            {contextData.cartItems
              .map((cartItem, index) => {
                let product = cartItem.product;
                let quantity = cartItem.quantity;
                let key = cartItem.product.id;
                let category = cartItem.product.title
                
                return (
                  <OrderCard
                    product={product}
                    key={key}
                    index={index}
                    quantity={quantity}
                    category={category}
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
                  <h3>{}</h3>
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
