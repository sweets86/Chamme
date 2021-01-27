import styled from "styled-components";

const LeveransStyled = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2em;
  padding-bottom: 1em;

  .deliverContainer {
    width: 100%;
    height: auto;
    box-shadow: 0 8px 6px -10px black;
    margin-top: 5px;
  }

  .deliver-option {
    width: 100%;
    height: 5em;
    background-color: white;
    box-shadow: 0 -8px 6px -10px black;
    display: flex;
    justify-content: space-between;
    padding-top: 2px;
  }

  .save-div {
    width: 100%;
    height: 5em;
    background-color: white;
    padding-top: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 -8px 6px -10px black;
  }

  .btn-save {
    width: 4em;
    height: 2em;
  }
`;
export default LeveransStyled;
