import React from "react";
import PaymentStyled from "./PaymentStyled";

interface Props {
    forms: () => void
}

export default function Payment(props: Props) {
  return (
    <PaymentStyled>
      {console.log(props.forms)}
      <div></div>
    </PaymentStyled>
  );
}