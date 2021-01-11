import styled from "styled-components";

const DetailStyled = styled.div`
  width: 100%;
  height: auto;
  background-color: black;
  margin-top: 4em;

  .colorDiv {
    height: 25%;
    margin: 2px;
    background-color: white;
  }
  .sizeDiv {
      width: 100%;
    height: 10em;
    background-color: white;
  }

  .sizeCheckboxDiv {
    display: flex;
    justify-content: space-evenly;
  }

  .sizeCheckbox {
    width: 10em;
    height: 3em;
    background-color: black;
    margin-bottom: 1em;
    margin-right: 1em;
  }
  
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 1rem;
  }

  input[type="checkbox"] {
    opacity: 0;
    position: fixed;
    width: 0;
  }
`;
export default DetailStyled;
