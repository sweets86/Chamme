import styled from "styled-components";

const OrderCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;

  h1 {
    padding-left: 0.7em;
  }

  .contain {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    /* background-color: #201e1e; */
    /* box-shadow: 0 8px 6px -6px black; */
    min-height: 80%;
    padding: 1em;
    margin-bottom: 5em;
  }

  .orderInfoDiv {
    margin-left: 5em;
    width: 50%;
    /* height: auto; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

export default OrderCompositionStyled;
