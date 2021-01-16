import React from "react";
import DetailStyled from "./DetailStyled";

interface State {
  color: string;
  size: string;
}

interface Props {
  size: string[];
  color: string[];
  passingValues: (detailValue: any) => void;
}

export default class Detail extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      color: "",
      size: "",
    };
  }

  saveValues = () => {
    if (this.state.color && this.state.size !== "") {
      const extraValues = {
        color: this.state.color,
        size: this.state.size,
      };
      this.props.passingValues(extraValues);
    } else {
      alert("Välj både färg och storlek, tack.");
    }
  };

  handleCheckedColor = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    let value = event.target.value;
    let checked = event.target.checked;

    if (checked === true) {
      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          color: value,
        },
        () => {
          console.log(this.state.color);
          if (this.state.size !== "") {
            this.saveValues()
          }
        }
      );
    } else {
      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          color: "",
        },
        () => {
          console.log(this.state.color);
          if (this.state.color === "") {
            console.log(this.state.color)
            let falseColor = this.state.color
            this.props.passingValues(falseColor)
          }
        }
      );
    }
  };

  handleCheckedSize = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    let value = event.target.value;
    let checked = event.target.checked;
    let id = event.target.id

    console.log(id)
    if (checked === true) {
      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          size: value,
        },
        () => {
          console.log(this.state.size);
          if (this.state.color !== "") {
            this.saveValues()
          }
        }
      );
    } else {
      console.log("checked: " + value + " is " + checked);
      this.setState(
        {
          size: "",
        },
        () => {
          console.log(this.state.size);
          if (this.state.size === "") {
            console.log(this.state.size)
            let falseSize = this.state.size
            this.props.passingValues(falseSize)
          }
        }
      );
    }
  };

  render() {
    const sizes = this.props.size;
    const colors = this.props.color;
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
                  onChange={(e) => this.handleCheckedColor(e)}
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
                  onChange={(e) => this.handleCheckedSize(e)}
                />
                <label htmlFor={size}>{size}</label>
              </form>
            );
          })}
        </div>
      </DetailStyled>
    );
  }
}
