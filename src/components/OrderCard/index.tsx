import React from "react";
import OrderCardStyled from "./OrderCardStyled";

interface Props {
  product: any;
}

export default function OrderCard(props: Props) {
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
              <div className="deleteBtn"></div>
            </div>
          </div>
        </div>
        <div className="titleDiv">{<h3>{props.product.name}</h3>}</div>
        <div className="bottomDiv">
          <div className="quantityDiv">Quantity</div>
          <div className="if-t-shirts"></div>
          <div className="priceDiv">{props.product.price} Kr</div>
        </div>
      </div>
    </OrderCardStyled>
  );
}
