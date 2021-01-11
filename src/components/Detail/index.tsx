import React from "react";
import DetailStyled from "./DetailStyled";

interface Props {
  size: string[];
  color: string[];
}

export default function Detail(props: Props) {
  const sizes = props.size;
  const colors = props.color;

  const handleCheckedColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let checked = event.target.checked;

    console.log(value, checked);
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
