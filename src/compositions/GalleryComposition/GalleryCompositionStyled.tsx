import styled from "styled-components";

const GalleryCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  top: 17%;
  background-color: white;

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: #201e1e;
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 2em;
    margin-bottom: 3em;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 3rem;
  }

  .gridDiv {
      width: 100%;
      height: 22em;
      background-color: white;
      display: flex;
      justify-content: center;
      align-items: center;
  }

  img {
      object-fit: contain;
      width: 12em;
  }

  @media screen and (max-width: 400px) {
      .grid {
        grid-gap: 1rem;
      }

      .contain {
          padding: 0;
          background-color: #f0eded;
      }
  }
`;

export default GalleryCompositionStyled;
