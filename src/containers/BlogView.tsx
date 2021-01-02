import styled from "styled-components";
import BlogImage from "../components/BlogImage";
import BlogComposition from "../compositions/BlogComposition";
import InfoComposition from "../compositions/InfoComposition";

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
      <InfoComposition />
    </Contain>
  );
}
