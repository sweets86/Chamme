import React from "react";
import PaymentStyled from "./PaymentStyled";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import PrivacyPolicyCheckbox from "../PrivacyPolicyCheckbox";

interface PayOption {
  title: string;
}
export const paymentOptions: PayOption[] = [
  {
    title: "VISA",
  },
  {
    title: "Swish",
  },
];

interface Props {
  forms: any;
}

interface State {
  toggle: number;
  paymentOption: string;
  showPayBtn: boolean;
  total: number;
}

export default class Payment extends React.Component<Props, State> {
  static contextType = CartContext;
  constructor(props: Props) {
    super(props);

    this.state = {
      toggle: 0,
      paymentOption: "VISA",
      showPayBtn: false,
      total: 0,
    };
  }

  handleOption = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    event.preventDefault();
    const value = event.target.value;
    const checked = event.target.checked;
    this.setState({ toggle: index }, () => {});

    if (checked === true)
      this.setState({ paymentOption: value }, () => {
        console.log(this.state.paymentOption);
      });
  };

  handlePrivacy = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;

    if (checked === true) {
      this.setState({ showPayBtn: true });
    } else {
      this.setState({ showPayBtn: false });
    }
  };

  render() {
    return (
      <div>
        {this.props.forms.map((content: any, index: number) => {
          let firstName = content.firstName;
          let lastName = content.lastName;
          let address = content.address;
          let postNumber = content.postNumber;
          let postAddress = content.postAddress;
          let email = content.email;
          let mobile = content.mobile;
          let delivery = content.deliveryOption;
          let numberDelivery = parseInt(delivery);
          return (
            <PaymentStyled key={index}>
              <span className="double">
                <p>{firstName}</p>
                <p>{lastName}</p>
              </span>
              <p>{address}</p>
              <span className="double">
                <p>{postNumber}</p>
                <p>{postAddress}</p>
              </span>
              <br />
              <p>{email}</p>
              <p>{mobile}</p>
              <br />
              <span className="delivery-span">
                <p className="delivery-text">Frakt </p>
                {delivery} kr
              </span>
              <span className="delivery-span">
                <p className="total-text">Totalt</p>
                {numberDelivery + this.context.totalPrice()} kr
              </span>
            </PaymentStyled>
          );
        })}
        <PaymentStyled>
          <h2>Betalningsalternativ</h2>
          <div className="payment-options-container">
            <div className="payment-option">
              {paymentOptions.map((option, index) => {
                return (
                  <label htmlFor="payment" key={index}>
                    <h3>{option.title}</h3>
                    <input
                      name="payment"
                      type="radio"
                      value={option.title}
                      checked={this.state.toggle === index}
                      onChange={(e) => this.handleOption(e, index)}
                    />
                  </label>
                );
              })}
            </div>
          </div>
          <PrivacyPolicyCheckbox handlePrivacy={(e) => this.handlePrivacy(e)} />
          <div className="finish-btn-div">
            {this.state.showPayBtn ? (
              <button className="finish-btn">Slutför köp</button>
            ) : null}
          </div>
        </PaymentStyled>
      </div>
    );
  }
}
