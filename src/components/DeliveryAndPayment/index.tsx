import React from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";

interface Props {

}

interface State {
  showBuyerInfo: boolean;
  forms: [];
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
    };
  }

  printBuyerInfoBtn = (buyerInfo: any) => {
    if (Object.keys(buyerInfo).length !== 0) {
      let buyerInfoToConfirm = this.state.forms as any;
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

  render() {
    return (
      <DeliveryAndPaymentStyled>
        <div className="title">
          <h2>Frakt & Betalsätt</h2>
        </div>
        <DeliveryInfo printBuyerInfoBtn={this.printBuyerInfoBtn}/>
        {this.state.showBuyerInfo ? <Payment forms={this.state.forms} /> : null}
      </DeliveryAndPaymentStyled>
    );
  }
}
