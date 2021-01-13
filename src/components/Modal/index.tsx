import React from "react";
import ModalStyled from "./ModalStyled";
import Detail from '../Detail'

interface Props {
  closeModal: () => void;
  size: string[];
  color: string[];
}

export default function Modal(props: Props) {

    const passingValues = (detailValues: object) => {
        console.log(detailValues)
    }
    
  return (
    <ModalStyled>
      <div className="modal-inner">
        <h3>Välj Färg och Storlek</h3>
        <Detail color={props.color} size={props.size} passingValues={(detailValues => passingValues(detailValues))} />
        <button onClick={props.closeModal}>Klar</button>
      </div>
    </ModalStyled>
  );
}
