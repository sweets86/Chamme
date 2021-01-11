import styled from "styled-components";
import DetailComposition from '../compositions/DetailComposition'

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function DetailView() {
  return (
    <Contain>
      <DetailComposition />
    </Contain>
  );
}
