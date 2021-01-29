import React, { useState } from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";

interface Props {}

interface State {
  showBuyerInfo: boolean;
  forms: [];
  infoForm: [];
  contactForm: [];
  deliveryForm: [];
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
      infoForm: [],
      contactForm: [],
      deliveryForm: [],
    };
  }

  buyerInfoForm = (buyerInfo: any) => {
    if (buyerInfo.length !== 0) {
      let setForm = this.state.forms as any;
      setForm.push(buyerInfo);
      this.setState(
        {
          forms: setForm,
        },
        () => {
          console.log(this.state.forms);
        }
      );
    } else {
      console.log(buyerInfo);
    }
  };

  contactInfoForm = (buyerContactInfo: any) => {
    if (buyerContactInfo.length !== 0) {
      let setForm = this.state.forms as any;
      setForm.push(buyerContactInfo);
      this.setState(
        {
          forms: setForm,
        },
        () => {
          console.log(this.state.forms);
        }
      );
    } else {
      console.log(buyerContactInfo);
    }
  };

  deliveryOptionForm = (deliveryOption: any) => {
    if (deliveryOption.length !== 0) {
      let setForm = this.state.forms as any;
      setForm.push(deliveryOption);
      this.setState(
        {
          forms: setForm,
        },
        () => {
          console.log(this.state.forms);
        }
      );
    } else {
      console.log(deliveryOption);
    }
  };

  printBuyerInfoBtn = () => {
    // if ... måste kolla om form har buyerinfo, contactinfo och deliveryoption, om den har det så kör om inte så är det inte validerat rätt.
    this.setState({ showBuyerInfo: true });
  };

  render() {
    return (
      <DeliveryAndPaymentStyled>
        <div className="title">
          <h2>Frakt & Betalsätt</h2>
        </div>
        <DeliveryInfo
          buyerInfoForm={(buyerInfo) => this.buyerInfoForm(buyerInfo)}
          contactInfoForm={(buyerContactInfo) =>
            this.contactInfoForm(buyerContactInfo)
          }
          deliveryOptionForm={(deliveryOption) =>
            this.deliveryOptionForm(deliveryOption)
          }
          printBuyerInfoBtn={this.printBuyerInfoBtn}
        />
        {this.state.showBuyerInfo ? <Payment forms={this.state.forms} /> : null}
      </DeliveryAndPaymentStyled>
    );
  }
}
