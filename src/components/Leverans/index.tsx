import React, { useEffect, useState } from "react";
import LeveransStyled from "./LeveransStyled";

interface Props {
  printBuyerInfoBtn: () => void;
  deliveryOptionForm: (deliveryOption: any) => void;
}

export default function Leverans(props: Props) {
  /* useEffect(() => {
    props.deliveryOptionForm(toggle);
  }); */

  const deliveryOptions = {
    home: 99,
    market: 49,
  };

  const [toggle, setToggle] = useState(["49"]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setToggle([value]);

    props.deliveryOptionForm(toggle)
  };

  return (
    <LeveransStyled>
      <h2>Välj leveransalternativ</h2>
      <div className="deliverContainer">
        <div className="deliver-option">
          <label className="largeLabel" htmlFor="homeDelivery">
            <p>
              PostNord hemleverans - direkt hem till dörren
              <br />
              {deliveryOptions.home} Kr
            </p>
            <input
              name="homeDelivery"
              type="radio"
              value={deliveryOptions.home}
              checked={toggle === ["99"]}
              onChange={(e) => handleChange(e)}
            />
          </label>
          <label className="largeLabel" htmlFor="market">
            <p>
              PostNord - paket till närmaste postombud <br />
              {deliveryOptions.market} Kr
            </p>
            <input
              name="market"
              type="radio"
              value={deliveryOptions.market}
              checked={toggle === ["49"]}
              onChange={(e) => handleChange(e)}
            />
          </label>
        </div>
        <div className="save-div">
          <button onClick={props.printBuyerInfoBtn} className="btn-save">
            Spara
          </button>
        </div>
      </div>
    </LeveransStyled>
  );
}
