import styled from "styled-components";

const OrderStyled = styled.div`
  width: 50%;
  padding: 0.5em;
  box-shadow: 0 8px 6px -6px black;
  margin-right: 1em;

  .orderNav {
    width: 100%;
    height: 3em;
    padding: 0.5em;
    color: white;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    display: flex;
    align-items: center;
  }

  .orderTot {
    width: 100%;
    height: auto;
    padding: 0.5em;
  }

  .frakt {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 2px;
  }

  .totalt {
    display: flex;
    justify-content: space-between;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  h4 {
    margin: 0;
  }

  h2 {
    margin: 0;
  }
`;

export default OrderStyled;
