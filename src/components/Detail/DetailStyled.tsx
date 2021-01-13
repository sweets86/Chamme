import styled from "styled-components";

const DetailStyled = styled.div`
  margin-top: 3em;

  .gridColor {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(1, 50px);
    grid-gap: 20px 20px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, auto);
    grid-template-rows: repeat(2, 50px);
    grid-gap: 20px 20px;
  }

  .sizeCheckbox {
    width: auto;
    height: 3em;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: transform 250ms;
  }

  .sizeCheckbox:hover {
    transform: translateY(-3px);
  }

  input[type="checkbox"] {
    opacity: 0;
    width: 10em;
    height: 3em;
    position: absolute;
    cursor: pointer;
  }

  label {
    color: white;
  }

  @media screen and (max-width: 1200px) {
    input[type="checkbox"] {
      width: 8em;
    }
  }
  @media screen and (max-width: 1100px) {
    input[type="checkbox"] {
      width: 7em;
    }
  }
  @media screen and (max-width: 920px) {
    input[type="checkbox"] {
      width: 5em;
    }
  }
`;
export default DetailStyled;
