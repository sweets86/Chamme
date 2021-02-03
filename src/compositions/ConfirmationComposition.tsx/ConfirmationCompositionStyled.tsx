import styled from "styled-components";

const ConfirmationCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 10em;

  h1 {
    margin: 0;
    margin-left: 15px;
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
    margin-bottom: 1em;
  }

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
   /*  background-color: #201e1e; */
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 3em;
    flex-direction: column;
  }

  .product {
    display: flex;
    flex-direction: column;
   /*  align-items: center; */
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
  }

  .pay-container {
    width: 100%;
    height: auto;
    /* margin-bottom: 2em; */
    justify-content: space-between;
    display: flex;
  }

  .contain-bottom {
    display: flex;
    /* justify-content: space-evenly;
    align-items: center; */
   /*  background-color: #201e1e; */
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 0.8em;
    margin-bottom: 3em;
    flex-direction: column;
    margin-top: 2em;
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
