import React from "react";
import styled from "styled-components";

const Contain = styled.div`
  position: absolute;
  top: 25%;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export default function CancelView() {
  return (
    <Contain>
      <h1>
        Sorry... Något fel uppstod, återvänd till startsida eller produkter.
      </h1>
    </Contain>
  );
}
