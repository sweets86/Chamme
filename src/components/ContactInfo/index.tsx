import React from "react";
import ContactInfoStyled from "./ContactInfoStyled";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validMobileRegex = RegExp(/^(\+\d{1,3}[- ]?)?\d{10}$/);

const validateForm = (errors: any) => {
  let valid = true;
  Object.values(errors).map(
    (value: any) => value.length > 0 && (valid = false)
  );
  return valid;
};

interface Props {
  contactInfoForm: (buyerContactInfo: any) => void;
}

interface State {
  email: string;
  mobile: number;

  errors: {
    email: any;
    mobile: any;
  };
}

export default class ContactInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      email: "",
      mobile: parseInt(""),

      errors: {
        email: "",
        mobile: "",
      },
    };
  }

  saveForm = () => {
    const buyerContactInfo = [
      {
        email: this.state.email,
        mobile: this.state.mobile,
      },
    ];
    this.props.contactInfoForm(buyerContactInfo);
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Fyll i email";
        break;
      case "mobile":
        errors.mobile = validMobileRegex.test(value)
          ? ""
          : "Fyll i mobilnummer";
        break;
      default:
        break;
    }
    this.setState((prevState) => ({
      ...prevState,
      errors,
      [name]: value,
    }));

    if (
      validateForm(this.state.errors) &&
      this.state.email &&
      this.state.mobile
    ) {
      this.saveForm();
    } else {
      console.error("Invalid Form");
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <ContactInfoStyled>
        <h2>Dina Kontaktuppgifter</h2>
        <div className="contactContainer">
          <label htmlFor="email">
            <input
              name="email"
              type="email"
              onChange={this.handleChange}
              placeholder="Mail"
              /* autoComplete="on" */
            />
            {errors.email.length > 0 && (
              <span style={{ color: "red" }}>{errors.email}</span>
            )}
          </label>
          <label htmlFor="mobile">
            <input
              name="mobile"
              type="mobile"
              onChange={this.handleChange}
              placeholder="Mobil"
              /* autoComplete="on" */
            />
            {errors.mobile.length > 0 && (
              <span style={{ color: "red" }}>{errors.mobile}</span>
            )}
          </label>
        </div>
      </ContactInfoStyled>
    );
  }
}
