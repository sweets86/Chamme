import styled from "styled-components";

const DeliveryInfoStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5em;
  margin-top: 2em;
  padding-bottom: 1em;

  .addressContainer {
    width: 100%;
    height: auto;
    /* box-shadow: 0 8px 6px -10px black; */
    margin-top: 5px;
  }

  .names {
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  .address {
    width: 100%;
    height: auto;
    padding-top: 2px;
  }

  .position {
    width: 100%;
    height: auto;
    /* box-shadow: 0 -8px 6px -10px black; */
    display: flex;
    justify-content: space-between;
  }

  label {
    display: flex;
    flex-direction: column;
    box-shadow: 0 0px 15px -8px black;
  }

  .smallLabel {
    width: 50%;
  }

  input {
    height: 3em;
    margin-bottom: 5px;
    margin-top: 5px;
    border: none;
    padding-left: 5px;
  }

`;
export default DeliveryInfoStyled;
