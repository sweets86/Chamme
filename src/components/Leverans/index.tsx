import React, { useState, useEffect } from "react";
import LeveransStyled from "./LeveransStyled";

interface Props {
  deliveryOptionForm: (deliveryOption: any) => void;
}

interface Delivery {
  title: string;
  price: number;
}
export const deliveryOptions: Delivery[] = [
  {
    title: "PostNord hemleverans - direkt hem till dörren",
    price: 49,
  },
  {
    title: "PostNord - paket till närmaste postombud",
    price: 99,
  },
];

export default function Leverans(props: Props) {
  const [toggle, setToggle] = useState(1);
  const [value, setValue] = useState("49");



  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    let newValue = event.target.value;
    const checked = event.target.checked;
    console.log(newValue);

    props.deliveryOptionForm(value);
    if (checked === true) {
      setValue(newValue);
      setToggle(index);
    } else {
      console.log(value)
    }
  };

  return (
    <LeveransStyled>
      <h2>Välj leveransalternativ</h2>
      <div className="deliverContainer">
        <div className="deliver-option">
          {deliveryOptions.map((option, index) => {
            return (
              <label className="largeLabel" htmlFor="delivery" key={index}>
                <p>
                  {option.title}
                  <br />
                  {option.price} Kr
                </p>
                <input
                  name="delivery"
                  type="radio"
                  value={option.price}
                  checked={toggle === index}
                  onChange={(e) => handleChange(e, index)}
                />
              </label>
            );
          })}
        </div>
      </div>
    </LeveransStyled>
  );
}
