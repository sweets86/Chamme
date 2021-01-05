import styled from "styled-components";

const ProductCardStyled = styled.div`
  background-color: white;
  height: 17.6em;
  width: 17.6em;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 1em;

  @media screen and (max-width: 400px) {
    height: 9.1em;
    width: 9.1em;
    padding: 0.5em;
    margin-right: 0.8em;
    margin-bottom: 0.8em;
  }
`;
export default ProductCardStyled;
