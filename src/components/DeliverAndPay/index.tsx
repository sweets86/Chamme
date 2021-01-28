import React from "react";
import PaymentStyled from "./PaymentStyled";

interface Props {
    forms: any;
}

export default function Payment(props: Props) {
  return (
    <PaymentStyled>
      {console.log(props.forms)}
      <div>
      </div>
    </PaymentStyled>
  );
}
