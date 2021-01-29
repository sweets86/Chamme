import React from "react";
import PaymentStyled from "./PaymentStyled";

interface Props {
    forms: any
}

export default function Payment(props: Props) {
  return (
    <PaymentStyled>
      {/* {props.forms.map((array: any) => {
        return console.log(array)
      })} */}
      {console.log(props.forms)}
      <div></div>
    </PaymentStyled>
  );
}