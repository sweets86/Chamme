import styled from "styled-components";

const ProductCardStyled = styled.div`
  background-color: white;
  height: 17.6em;
  width: 17.6em;
  margin: 2em;
  padding: 1em;
  box-shadow: 0 -1px 10px -1px black;

  .imgDiv {
    width: 100%;
    height: 75%;
    display: flex;
    justify-content: center;
  }

  img {
    object-fit: cover;
    height: 100%;
  }

  .contentDiv {
    height: auto;
    width: auto;
    padding-left: 5px;
    padding-right: 5px;
  }

  .price-and-btn-div {
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: large;
  }

  button {
    width: 7em;
    height: 2.5em;
    border-radius: 3px;
  }

  @media screen and (max-width: 400px) {
    height: 8.5em;
    width: 9.1em;
    padding: 0.5em;
    margin: 5px;

    .imgDiv {
      height: 60%;
    }

    .contentDiv {
      height: auto;
    }

    .price-and-btn-div {
      height: 1.5em;
    }

    button {
      width: 3em;
      height: 1.5em;
      display: flex;
      align-items: center;
    }

    h3 {
      font-size: small;
    }
  }
`;
export default ProductCardStyled;
