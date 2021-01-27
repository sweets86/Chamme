import React from "react";
import LeveransStyled from "./LeveransStyled";

interface Props {
    saveOrderInfo: () => void
}

export default function Leverans(props: Props) {
  return (
    <LeveransStyled>
      <h2>Välj leveransalternativ</h2>
      <div className="adressContainer">
        <div className="name">
          <div>Hemleverans</div>
          <div>Postombud</div>
        </div>
        <div className="adress"><button onClick={props.saveOrderInfo} className="btn-save">Spara</button></div>
      </div>
    </LeveransStyled>
  );
}
