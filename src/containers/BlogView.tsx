import styled from "styled-components";
import BlogImage from "../components/BlogImage";
import BlogComposition from "../compositions/BlogComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
    
`;

export default function BlogView() {
  return (
    <Contain>
      <BlogComposition />
      <BlogImage />
    </Contain>
  );
}
