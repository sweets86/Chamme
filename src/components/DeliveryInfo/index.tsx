import React from "react";
import ContactInfo from "../ContactInfo";
import Leverans from "../Leverans";
import DeliveryInfoStyled from "./DeliveryInfoStyled";

export default function DeliveryInfo() {
  return (
    <DeliveryInfoStyled>
      <h2>Din leveransadress</h2>
      <ContactInfo />
      <Leverans />
    </DeliveryInfoStyled>
  );
}
