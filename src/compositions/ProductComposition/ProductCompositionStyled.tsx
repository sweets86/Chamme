import styled from "styled-components";

const ProductCompositionStyled = styled.div`
  width: 100%;
  height: auto;
  background-color: white;

  .contain {
    display: flex;
    align-items: center;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 2em;
    flex-wrap: wrap;
  }

  h1 {
    padding-top: 1.5em;
    margin: 0;
    padding-left: 1.5em;
  }

  @media screen and (max-width: 400px) {
    .contain {
      padding: 3px;
    }
  }
`;

export default ProductCompositionStyled;
