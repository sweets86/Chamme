import React from "react";
import DetailStyled from "./DetailStyled";

interface Props {
  size: string[];
}

export default function Detail(props: Props) {
  const sizes = props.size;

  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    let checked = event.target.checked;

    console.log(value, checked);
  };

  return (
    <DetailStyled>
      <div className="colorDiv">
        <h3>COLOR</h3>
      </div>
      <div className="sizeDiv">
        <h3>SIZE</h3>
        <div className="sizeCheckboxDiv">
          {sizes.map((size, index) => {
            return (
              <div className="sizeCheckbox" key={index}>
                <input
                  type="checkbox"
                  value={size}
                  onChange={(e) => handleChecked(e)}
                />
              </div>
            );
          })}
        </div>
      </div>
    </DetailStyled>
  );
}
