import styled from "styled-components";

const OrderCardStyled = styled.div`
  width: 100%;
  height: auto;
  padding: 0.5em;
  box-shadow: 0 8px 6px -6px black;
  display: flex;

  .imgDiv {
    width: 25%;
    height: auto;
    margin-right: 0.5em;
    background-color: black;
    color: white;
  }

  .contentDiv {
    width: 75%;
  }

  .topDiv {
    display: flex;
    justify-content: space-between;
  }

  .deleteDiv {
    width: 25px;
    height: 20px;
    cursor: pointer;
  }

  .deleteBtnDiv {
    height: 20px;
    width: 2px;
    margin-left: 12px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
  }

  .deleteBtn {
    height: 20px;
    width: 2px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
  }

  .bottomDiv {
    display: flex;
    justify-content: space-between;
  }
`;
export default OrderCardStyled;
