import styled from "styled-components";

const DeliveryInfoStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5em;
  margin-top: 2em;
  padding-bottom: 1em;

  .adressContainer {
    width: 100%;
    height: auto;
    box-shadow: 0 8px 6px -10px black;
    margin-top: 5px;
  }

  .name {
    width: 100%;
    height: 2em;
    background-color: white;
    box-shadow: 0 -8px 6px -10px black;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  .adress {
    width: 100%;
    height: 2em;
    background-color: white;
    box-shadow: 0 -8px 6px -10px black;
    padding-top: 2px;
  }

  .position {
    width: 100%;
    height: 2em;
    background-color: white;
    box-shadow: 0 -8px 6px -10px black;
    display: flex;
    justify-content: space-between;
  }
`;
export default DeliveryInfoStyled;
