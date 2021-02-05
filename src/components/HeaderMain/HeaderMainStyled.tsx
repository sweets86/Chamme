import styled from "styled-components";

const HeaderMainStyled = styled.header`
  height: 5em;
  width: 100%;
  position: fixed;
  /* background-color: black; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* box-shadow: 0 8px 6px -6px black; */

  .titleLink {
    display: inline-block;
    margin: 8px;
    color: white;
    margin-left: 2.1em;
  }
  
  .menu {
    margin: 0;
    margin-right: 5em;
    display: inline-block;
    color: white;
  }

  @media screen and (max-width: 400px) {
    .menu {
      margin-right: 2em;
    }

    .titleLink {
      margin-left: 0.9em;
    }
  }
`;

export default HeaderMainStyled;
