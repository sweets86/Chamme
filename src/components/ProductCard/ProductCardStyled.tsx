import styled from "styled-components";

const ProductCardStyled = styled.div`
  background-color: white;
  height: 17.6em;
  width: 17.6em;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 1em;
  box-shadow: 0 -1px 10px -1px black;

  .imgDiv {
    width: 100%;
    height: 80%;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .contentDiv {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: auto;
    width: auto;
  }

  .infoDiv {
    width: 50%;
    height: auto;
  }

  h3 {
    margin: 0;
    margin-top: 5px;
  }

  button {
    width: 10em;
    height: 3em;
    border-radius: 3px;
    margin-top: 5px;
  }

  @media screen and (max-width: 400px) {
    height: 9.1em;
    width: 9.1em;
    padding: 0.5em;
    margin-right: 0.8em;
    margin-bottom: 0.8em;

    .imgDiv {
        height: 50%;
    }

    .contentDiv {
        height: 50%;
    }

    .infoDiv {
        height: 100%;
    }

    button {
        width: 4em;
        height: 2em;
        margin-top: 20px;
    }
  }
`;
export default ProductCardStyled;
