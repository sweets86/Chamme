import React from "react";
import ContactInfo from "../ContactInfo";
import Leverans from "../Leverans";
import DeliveryInfoStyled from "./DeliveryInfoStyled";

const validFirstNameRegex = RegExp(
  /^(?<firstchar>(?=[A-Za-z]))((?<alphachars>[A-Za-z])|(?<specialchars>[A-Za-z]['-](?=[A-Za-z]))|(?<spaces> (?=[A-Za-z])))*$/
);

const validLastNameRegex = RegExp(
  /^(?<firstchar>(?=[A-Za-z]))((?<alphachars>[A-Za-z])|(?<specialchars>[A-Za-z]['-](?=[A-Za-z]))|(?<spaces> (?=[A-Za-z])))*$/
);

const validAddressRegex = RegExp(/^[#.0-9a-öA-Ö\s,-]+$/);

const validPostNumberRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{5}$/);

const validPostRegex = RegExp(/^[#.0-9a-öA-Ö\s,-]+$/);

/* const validateForm = (errors: any) => {
  let valid = true;
  Object.values(errors).map(
    (value: any) => value.length > 0 && (valid = false)
  );
  return valid;
}; */

interface Props {
  saveBuyerInfo: () => void;
}

interface State {
  firstName: string;
  lastName: string;
  address: string;
  postNumber: number;
  postAddress: string;
  form: [];

  errors: {
    firstName: any;
    lastName: any;
    address: any;
    postNumber: any;
    postAddress: any;
  };
}

export default class DeliveryInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      address: "",
      postNumber: parseInt(""),
      postAddress: "",
      form: [],

      errors: {
        firstName: "",
        lastName: "",
        address: "",
        postNumber: "",
        postAddress: "",
      },
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "firstName":
        errors.firstName = validFirstNameRegex.test(value)
          ? ""
          : "Fyll i förnamn";
        break;
      case "lastName":
        errors.lastName = validLastNameRegex.test(value)
          ? ""
          : "Fyll i efternamn";
        break;
      case "address":
        errors.address = validAddressRegex.test(value) ? "" : "Fyll i adress";
        break;
      case "postNumber":
        errors.postNumber = validPostNumberRegex.test(value)
          ? ""
          : "Fyll i postnummer";
        break;
      case "postAddress":
        errors.postAddress = validPostRegex.test(value) ? "" : "Fyll i ort";
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors,
      [name]: value,
    }));
  };

  render() {
    const { errors } = this.state;
    return (
      <DeliveryInfoStyled>
        <h2>Din leveransadress</h2>
        <div className="addressContainer">
          <div className="names">
            <label className="smallLabel" htmlFor="firstName">
              <input
                name="firstName"
                type="firstName"
                onChange={this.handleChange}
                placeholder="Förnamn"
                autoComplete="on"
              />
              {errors.firstName.length > 0 && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </label>
            <label className="smallLabel" htmlFor="lastName">
              <input
                name="lastName"
                type="lastName"
                onChange={this.handleChange}
                placeholder="Efternamn"
                autoComplete="on"
              />
              {errors.firstName.length > 0 && (
                <span style={{ color: "red" }}>{errors.firstName}</span>
              )}
            </label>
          </div>
          <div className="address">
            <label htmlFor="address">
              <input
                name="address"
                type="address"
                onChange={this.handleChange}
                placeholder="Adress"
                autoComplete="on"
              />
              {errors.address.length > 0 && (
                <span style={{ color: "red" }}>{errors.address}</span>
              )}
            </label>
          </div>
          <div className="position">
            <label className="smallLabel" htmlFor="postNumber">
              <input
                name="postNumber"
                type="postNumber"
                onChange={this.handleChange}
                placeholder="Postnummer"
                autoComplete="on"
              />
              {errors.postNumber.length > 0 && (
                <span style={{ color: "red" }}>{errors.postNumber}</span>
              )}
            </label>
            <label className="smallLabel" htmlFor="postAddress">
              <input
                name="postAddress"
                type="postAddress"
                onChange={this.handleChange}
                placeholder="Ort"
                autoComplete="on"
              />
              {errors.postAddress.length > 0 && (
                <span style={{ color: "red" }}>{errors.postAddress}</span>
              )}
            </label>
          </div>
        </div>
        <ContactInfo />
        <Leverans saveBuyerInfo={this.props.saveBuyerInfo} />
      </DeliveryInfoStyled>
    );
  }
}
