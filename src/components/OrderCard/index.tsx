import React from "react";
import OrderCardStyled from "./OrderCardStyled";

export default function OrderCard() {
  return (
    <OrderCardStyled>
      <div className="imgDiv">Image</div>
      <div className="contentDiv">
        <div className="topDiv">
          <h4>Brand</h4>
          <div className="deleteDiv">
            <div className="deleteBtnDiv">
              <div className="deleteBtn"></div>
            </div>
          </div>
        </div>
        <div className="titleDiv">
          <h3>Title</h3>
        </div>
        <div className="bottomDiv">
          <div className="quantityDiv">Quantity</div>
          <div className="if-t-shirts"></div>
          <div className="priceDiv">199 kr</div>
        </div>
      </div>
    </OrderCardStyled>
  );
}
