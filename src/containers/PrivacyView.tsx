import React from "react";
/* import ReuseComposition from "../compositions/ReuseComposition/index"; */
import styled from "styled-components";

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PrivacyView() {
  return (
    <Contain>
      <h1>Privacy</h1>
      {/* <ReuseComposition /> */}
    </Contain>
  );
}
