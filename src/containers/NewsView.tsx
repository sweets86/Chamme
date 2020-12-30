import styled from "styled-components";
import NewsComposition from "../compositions/NewsComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function NewsView() {
  return (
    <Contain>
      <NewsComposition />
    </Contain>
  );
}
