import styled from "styled-components";

const LeveransStyled = styled.div`
  width: 100%;
  height: auto;
  margin-top: 2em;
  padding-bottom: 1em;

  .deliverContainer {
    width: 100%;
    height: auto;
    /* box-shadow: 0 8px 6px -10px black; */
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

  .largeLabel {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }

  .textDiv {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  input[type="radio"] {
    opacity: 0;
    width: 18%;
    height: 5em;
    position: absolute;
    cursor: pointer;
  }

  .largeLabel:active {
    box-shadow: 0 0px 10px -4px black;
    color: gray;
  }

  @media screen and (max-width: 1600px) {
    .largeLabel {
      padding: 2em;
    }
  }
  @media screen and (max-width: 1200px) {
    .largeLabel {
      padding: 0;
    }
  }
`;
export default LeveransStyled;
