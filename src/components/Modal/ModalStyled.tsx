import styled from "styled-components";

const ModalStyled = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0, 0, 0, 0.5);

  .modal-inner {
    position: absolute;
    left: 25%;
    right: 25%;
    top: 25%;
    bottom: 25%;
    margin: auto;
    background: white;
    padding: 20px;
  }

  span {
    display: flex;
    justify-content: space-between;
  }

  .exitBtnContainer {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  .extBtnDiv {
    height: 25px;
    width: 2px;
    margin-left: 12px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 1;
  }

  .exitBtn {
    height: 25px;
    width: 2px;
    background-color: black;
    transform: rotate(90deg);
    z-index: 2;
  }
`;
export default ModalStyled;
