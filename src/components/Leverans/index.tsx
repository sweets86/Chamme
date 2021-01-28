import React from "react";
import LeveransStyled from "./LeveransStyled";

interface Props {
  saveBuyerInfo: () => void;
}

export default function Leverans(props: Props) {
  return (
    <LeveransStyled>
      <h2>Välj leveransalternativ</h2>
      <div className="deliverContainer">
        <div className="deliver-option">
          <label className="largeLabel" htmlFor="homeDelivery">
            <p>
              PostNord hemleverans - direkt hem till dörren
              <br />
              99 Kr
            </p>
            <input
              name="homeDelivery"
              type="radio"
              value="homeDelivery"
              checked
              /* onChange={this.handleChange} */
            />
          </label>
          <label className="largeLabel" htmlFor="market">
            <p>
              PostNord - paket till närmaste postombud <br />
              49 Kr
            </p>
            <input
              name="market"
              type="radio"
              value="market"
              checked
              /* onChange={this.handleChange} */
             
            />
          </label>
        </div>
        <div className="save-div">
          <button onClick={props.saveBuyerInfo} className="btn-save">
            Spara
          </button>
        </div>
      </div>
    </LeveransStyled>
  );
}
