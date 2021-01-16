import React, { useState } from "react";
import ModalStyled from "./ModalStyled";
import Detail from "../Detail";

interface Props {
  closeModal: (extrasObj: object) => void;
  exitModal: () => void;
  size: string[];
  color: string[];
}

export default function Modal(props: Props) {
  const [extrasObj, setExtrasObj] = useState({});

  const passingValues = (detailValues: object) => {
    console.log(detailValues);
    setExtrasObj(detailValues);
  };

  return (
    <ModalStyled>
      <div className="modal-inner">
        <span>
          <h3>Välj en färg och en storlek</h3>
          <div className="exitBtnContainer">
            <div className="extBtnDiv">
              <div className="exitBtn" onClick={props.exitModal}></div>
            </div>
          </div>
        </span>
        <Detail
          color={props.color}
          size={props.size}
          passingValues={(detailValues) => passingValues(detailValues)}
        />
        <button onClick={() => props.closeModal(extrasObj)}>Klar</button>
      </div>
    </ModalStyled>
  );
}
