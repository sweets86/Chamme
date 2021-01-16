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

  .sizeRadio {
    width: auto;
    height: 3em;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    transition: transform 250ms;
  }

  .sizeRadio:hover {
    transform: translateY(-3px);
  }

  input[type="Radio"] {
    opacity: 0;
    width: 10em;
    height: 3em;
    position: absolute;
    cursor: pointer;
  }

  label {
    /* color: white; */
    display: inline-block;
		background-color: #f5f5f5;
		padding: 2px 5px;
		font-family: Sweden Sans;
		font-size: 16px;
		border: 2px solid #c4c4c4;
		border-radius: 3px;
		margin: 3px;
  }

  input[type="Radio"]:checked + label {
    background-color: grey;
  }

  @media screen and (max-width: 1200px) {
    input[type="Radio"] {
      width: 8em;
    }
  }
  @media screen and (max-width: 1100px) {
    input[type="Radio"] {
      width: 7em;
    }
  }
  @media screen and (max-width: 920px) {
    input[type="Radio"] {
      width: 5em;
    }
  }
`;
export default DetailStyled;
