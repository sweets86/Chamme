import styled from "styled-components";

const ProductCompositionStyled = styled.div`
  width: 100%;
  height: auto;

  .contain {
    display: flex;
    align-items: center;
    /* justify-content: center; */
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 2em;
    flex-wrap: wrap;
  }

  @media screen and (max-width: 400px) {
      .contain {
          padding: 0;
      }
  }
`;

export default ProductCompositionStyled;
