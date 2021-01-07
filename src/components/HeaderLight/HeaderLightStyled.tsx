import styled from "styled-components";

const HeaderLightStyled = styled.div`
  height: 5em;
  width: 100%;
  position: fixed;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .titleLink {
    display: inline-block;
    margin: 8px;
    color: black;
    margin-left: 2.1em;
  }

  .counter {
    margin: 0;
    margin-right: 5em;
    display: inline-block;
    color: black;
  }

  @media screen and (max-width: 400px) {
    .titleLink {
      margin-left: 0.9em;
    }

    .counter {
      margin-right: 2em;
    }
  }
`;
export default HeaderLightStyled;
