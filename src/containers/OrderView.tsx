import styled from "styled-components";
import OrderComposition from "../compositions/OrderComposition";

const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

export default function OrderView() {
  return (
    <Contain>
      <OrderComposition />
    </Contain>
  );
}
