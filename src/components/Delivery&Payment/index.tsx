import React, { useState } from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./Delivery&PaymentStyled";
import Payment from "../Payment";

export default function DeliveryAndPayment() {
  const [showBuyerInfo, setShowBuyerInfo] = useState(false);
  const [forms, setForms] = useState([]);

  const saveBuyerInfo = () => {
    setShowBuyerInfo(true);
  };

  const form = (printBuyerInfo: any) => {
    setForms(printBuyerInfo)
  };

  return (
    <DeliveryAndPaymentStyled>
      <div className="nav">
        <h2>Frakt & Betalsätt</h2>
      </div>
      <DeliveryInfo
        saveBuyerInfo={saveBuyerInfo}
        form={(printBuyerInfo) => form(printBuyerInfo)}
      />
      {showBuyerInfo ? <Payment forms={forms} /> : null}
    </DeliveryAndPaymentStyled>
  );
}
