import styled from "styled-components";
import Background from "../assets/background.jpg";

const MasterViewStyled = styled.div`
  background-image: url(${Background});
  height: 100vh;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  .cardContainer {
    display: flex;
    justify-content: space-around;
    width: 100%;
    position: absolute;
    bottom: 1em;
  }

  .card {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    bottom: 5em;
  }

  h1 {
    margin: 0;
    display: inline-block;
    color: white;
  }

  @media screen and (max-width: 400px) {
      .carousel {
        width: 75%;
        height: 10em;
      }

      .cardContainer {
          flex-wrap: wrap;
      }

      .card {
          margin-top: 1em;
      }
  }
`;
export default MasterViewStyled;
