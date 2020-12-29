import styled from "styled-components";

const HeaderMainStyled = styled.header`
  .navbar {
    height: 5em;
    width: 100%;
    position: sticky;
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .titleLink {
    display: inline-block;
    margin: 8px;
    margin-top: 17px;
    color: white;
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
  }
`;

/* export const navbar: CSSProperties = {
    
}

export const titleLink: CSSProperties = {
    display: 'inline-block',
    margin: '8px',
    marginTop: '17px',
    color: 'white'
}

export const menu: CSSProperties = {
    margin: "0",
    marginRight: "5em",
    display: "inline-block",
    color: "white",
} */

export default HeaderMainStyled;
