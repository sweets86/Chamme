import React, { useState } from "react";
import DetailStyled from "./DetailStyled";

interface Props {
  size: string[];
  color: string[];
  passingValues: (detailValue: object) => void;
}

export default function Detail(props: Props) {
  const sizes = props.size;
  const colors = props.color;

  const [detailValues, setDetailValues] = useState({
    colorValue: "",
    sizeValue: "",
    isValueChecked: false,
  });

  const handleCheckedColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let checked = event.target.checked;

    if (checked === true) {
      setDetailValues({
        colorValue: value,
        sizeValue: "",
        isValueChecked: checked,
      });
    } else {
      console.log(value, checked);
    }

    props.passingValues(detailValues);
    console.log(detailValues);
  };

  const handleCheckedSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let checked = event.target.checked;

    console.log(value, checked);
  };

  return (
    <DetailStyled>
      <h3>COLOR</h3>
      <div className="gridColor">
        {colors.map((color, index) => {
          return (
            <form className="sizeCheckbox" key={index}>
              <input
                type="checkbox"
                value={color}
                onChange={(e) => handleCheckedColor(e)}
              />
              <label htmlFor={color}>{color}</label>
            </form>
          );
        })}
      </div>

      <h3>SIZE</h3>
      <div className="grid">
        {sizes.map((size, index) => {
          return (
            <form className="sizeCheckbox" key={index}>
              <input
                type="checkbox"
                value={size}
                onChange={(e) => handleCheckedSize(e)}
              />
              <label htmlFor={size}>{size}</label>
            </form>
          );
        })}
      </div>
    </DetailStyled>
  );
}
