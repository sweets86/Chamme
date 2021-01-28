import React from "react";
import OrderCompositionStyled from "./OrderCompositionStyled";
import Order from "../../components/Order";
import DeliveryAndPayment from "../../components/DeliveryAndPayment";

export default function OrderComposition() {
  return (
    <OrderCompositionStyled>
      <div className="contain">
        <Order />
        <DeliveryAndPayment />
      </div>
    </OrderCompositionStyled>
  );
}
