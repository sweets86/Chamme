import styled from "styled-components";

const BlogCompositionStyled = styled.div`
  width: 85%;
  height: auto;
  margin-top: 5em;

  h1 {
    padding-left: 0.7em;
  }

  .contain {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* background-color: #201e1e; */
    box-shadow: 0 8px 6px -6px black;
    min-height: 80%;
    padding: 1em;
    margin-bottom: 1em;
  }

  .blogContent {
    width: 100%;
    /* height: auto; */
    display: flex;
    justify-content: space-between;
  }

  .mainBlog {
    width: 50%;
    /* height: auto; */
    /* background-color: white; */
    padding: 0.5em;
  }

  .sideBlog {
    margin-left: 5em;
    width: 50%;
    /* height: auto; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .sideContent {
    /* background-color: white; */
    padding: 0.5em;
    margin-bottom: 1em;
  }

  @media screen and (max-width: 400px) {
    .contain {
        box-shadow: none;
    }

    .blogContent {
      flex-wrap: wrap;
    }

    .mainBlog {
      width: 100%;
      margin-bottom: 1em;
      box-shadow: 0 8px 6px -6px black;
    }

    .sideBlog {
      width: 100%;
      margin-left: 0;
    }

    .sideContent {
      box-shadow: 0 8px 6px -6px black;
    }
  }
`;

export default BlogCompositionStyled;
