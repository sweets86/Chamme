import styled from "styled-components";

const NewsCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  top: 17%;
  background-color: white;

  .contain {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 3em;
  }

  .videoDiv {
    margin-bottom: 1em;
  }

  .description {
    padding: 0.5em;
    background-color: white;
    box-shadow: 0 8px 6px -6px white;
  }
`;

export default NewsCompositionStyled;
