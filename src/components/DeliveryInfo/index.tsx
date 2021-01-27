import React from "react";
import ContactInfo from "../ContactInfo";
import Leverans from "../Leverans";
import DeliveryInfoStyled from "./DeliveryInfoStyled";

interface Props {
  saveOrderInfo: () => void
}

export default function DeliveryInfo(props: Props) {
  return (
    <DeliveryInfoStyled>
      <h2>Din leveransadress</h2>
      <div className="adressContainer">
        <div className="name">
          <div>Förnamn</div>
          <div>Efternamn</div>
        </div>
        <div className="adress">Adress</div>
        <div className="position">
          <div>Postnummer</div>
          <div>Ort</div>
        </div>
      </div>
      <ContactInfo />
      <Leverans saveOrderInfo={props.saveOrderInfo} />
    </DeliveryInfoStyled>
  );
}
