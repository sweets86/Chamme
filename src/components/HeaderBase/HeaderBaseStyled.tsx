import styled from "styled-components";

const HeaderBaseStyled = styled.div`
  height: 5em;
  width: 100%;
  position: fixed;
  background-color: black;
  box-shadow: 0 8px 6px -6px black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .titleLink {
    display: inline-block;
    margin: 8px;
    color: white;
    margin-left: 2.1em;
  }

  @media screen and (max-width: 400px) {
    .titleLink {
      margin-left: 0.9em;
    }
  }
`;
export default HeaderBaseStyled;
