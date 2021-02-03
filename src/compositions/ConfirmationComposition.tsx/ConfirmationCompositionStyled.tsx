import styled from "styled-components";

const ConfirmationCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;
  margin-bottom: 5em;

  h1 {
    margin: 0;
    margin-left: 15px;
    margin-bottom: 10px;
  }

  h3 {
    margin: 0;
    margin-bottom: 5px;
  }

  h4 {
    margin: 0;
    margin-bottom: 5px;
  }

  .bottom-h1 {
    margin-left: 0;
    margin-bottom: 0.8em;
  }

  .price-h3 {
    padding-right: 1em;
  }

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /*  background-color: #201e1e; */
    box-shadow: 0 8px 6px -6px black;
    height: auto;
    padding: 1em;
    margin-bottom: 1em;
    flex-direction: column;
  }

  .product {
    display: flex;
    flex-direction: column;
    /*  align-items: center; */
  }

  .extras {
    margin-right: 6em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 5em;
  }

  .top-container {
    width: 100%;
    height: auto;
    justify-content: space-between;
    display: flex;
  }

  .container {
    box-shadow: 0 8px 6px -12px black;
    width: 100%;
    height: auto;
    /* margin-bottom: 2em; */
    justify-content: space-between;
    display: flex;
    padding-bottom: 0.5em;
    padding-top: 0.5em;
  }

  .container-products {
    box-shadow: 0 8px 6px -12px black;
    width: 100%;
    height: auto;
    display: flex;
    padding-top: 10px;
  }

  .left-container {
    width: 50%;
    margin-right: 0.5em;
    display: flex;
    justify-content: space-between;
  }

  .right-container {
    /*  box-shadow: 0 8px 6px -12px black; */
    width: 50%;
    height: auto;
    /* margin-bottom: 2em; */
    justify-content: space-between;
    display: flex;
    align-items: center;
  }

  .pay-container {
    width: 100%;
    height: auto;
    /* margin-bottom: 2em; */
    justify-content: space-between;
    display: flex;
    padding-top: 10px;
  }

  .contain-bottom {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 0.8em;
    margin-bottom: 3em;
    /* justify-content: space-evenly;
    align-items: center; */
    box-shadow: 0 8px 6px -6px black;
  }

  .buyerInfo {
    width: 17%;
  }

  .name {
    margin-top: 5px;
    display: flex;
    justify-content: space-between;
  }
`;

export default ConfirmationCompositionStyled;
