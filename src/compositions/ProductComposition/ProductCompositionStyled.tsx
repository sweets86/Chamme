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
    margin-left: 13px;
    padding-top: 10px;
  }

  @media screen and (max-width: 400px) {
    .contain {
      padding: 0;
    }
  }
`;

export default ProductCompositionStyled;
