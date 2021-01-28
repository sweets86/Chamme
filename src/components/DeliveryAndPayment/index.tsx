import React, { useState } from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";

interface Props {}

interface State {
  showBuyerInfo: boolean;
  forms: [];
  infoForm: [];
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
      infoForm: []
    };
  }

  buyerInfoForm = (buyerInfo: any) => {
    this.setState({infoForm: buyerInfo})
    console.log(buyerInfo)
  };
  
  contactInfoForm = (buyerContactInfo: any) => {
    console.log(buyerContactInfo)
  };

  deliveryOptionForm = (deliveryOption: any) => {
    /* console.log(printBuyerInfo) */
  };
  
  form = (printBuyerInfo: any) => {
    let setForm = this.state.forms as any;
    setForm.push(printBuyerInfo);
    this.setState(
      {
        forms: setForm,
      },
      () => {
        console.log(this.state.forms);
      }
      );
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
