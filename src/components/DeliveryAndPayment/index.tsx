import React from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";

interface Props {}

interface State {
  showBuyerInfo: boolean;
  forms: [];
  delivery: string;
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
      delivery: "",
    };
  }

  printBuyerInfoBtn = (buyerInfo: any) => {
    let buyerInfoToConfirm = this.state.forms as any;
    if (Object.keys(buyerInfo).length !== 0) {
      buyerInfoToConfirm.splice(0, 1);
      buyerInfoToConfirm.push(buyerInfo);
      this.setState(
        {
          forms: buyerInfoToConfirm,
        },
        () => {
          this.setState({ showBuyerInfo: true });
        }
      );
    } else {
      console.log(this.state.forms);
    }
  };

  deliveryOption = (option: any) => {
    this.setState({ delivery: option });
  };

  render() {
    return (
      <DeliveryAndPaymentStyled>
        <div className="title">
          <h2>Frakt & Betalsätt</h2>
        </div>
        <DeliveryInfo
          printBuyerInfoBtn={this.printBuyerInfoBtn}
          deliveryOption={(option) => this.deliveryOption(option)}
        />
        {this.state.showBuyerInfo ? <Payment forms={this.state.forms} /> : null}
      </DeliveryAndPaymentStyled>
    );
  }
}
