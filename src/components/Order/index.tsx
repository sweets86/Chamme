import React from "react";
import OrderCard from "../OrderCard";
import OrderStyled from "./OrderStyled";

export default function Order() {
  return (
    <OrderStyled>
      <div className="orderNav">
        <h2>Dina Varor</h2>
      </div>
      <OrderCard />
      <div className="orderTot">
        <div className="frakt">
          <h3>Frakt</h3>
          <h3>49 kr</h3>
        </div>
        <div className="totalt">
          <h2>Totalt</h2>
          <h2>248 kr</h2>
        </div>
      </div>
    </OrderStyled>
  );
}
