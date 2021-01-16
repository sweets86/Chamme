import React, { useState } from "react";
import ModalStyled from "./ModalStyled";
import Detail from '../Detail'

interface Props {
  closeModal: (extrasObj: object) => void;
  size: string[];
  color: string[];
}

export default function Modal(props: Props) {

  const [extrasObj, setExtrasObj] = useState({})

    const passingValues = (detailValues: object) => {
        console.log(detailValues)
      setExtrasObj(detailValues)
    }
    
  return (
    <ModalStyled>
      <div className="modal-inner">
        <h3>Välj Färg och Storlek</h3>
        <Detail color={props.color} size={props.size} passingValues={(detailValues => passingValues(detailValues))} />
        <button onClick={() => props.closeModal(extrasObj)}>Klar</button>
      </div>
    </ModalStyled>
  );
}
