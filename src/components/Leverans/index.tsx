import React from "react";
import LeveransStyled from "./LeveransStyled";

interface Props {
    saveBuyerInfo: () => void
}

export default function Leverans(props: Props) {
  return (
    <LeveransStyled>
      <h2>Välj leveransalternativ</h2>
      <div className="deliverContainer">
        <div className="deliver-option">
          <div>Hemleverans</div>
          <div>Postombud</div>
        </div>
        <div className="save-div"><button onClick={props.saveBuyerInfo} className="btn-save">Spara</button></div>
      </div>
    </LeveransStyled>
  );
}
