import React from "react";
import DeliveryInfo from "../DeliveryInfo";
import DeliveryAndPaymentStyled from "./DeliveryAndPaymentStyled";
import Payment from "../Payment";
import { CartConsumer, ContextState } from "../../contexts/cartContext";

interface Props {}

interface State {
  showBuyerInfo: boolean;
  forms: [];
  delivery: string
}

export default class DeliveryAndPayment extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      showBuyerInfo: false,
      forms: [],
      delivery: ""
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

  deliveryOption = (option: any) => {
    this.setState({delivery: option})
  }

  render() {
    return (
      <CartConsumer>
        {(contextData: ContextState) => {
          return (
            <DeliveryAndPaymentStyled>
              <div className="title">
                <h2>Frakt & Betalsätt</h2>
              </div>
              {contextData.deliveryOption(this.state.delivery)}
              <DeliveryInfo printBuyerInfoBtn={this.printBuyerInfoBtn} deliveryOption={(option) => this.deliveryOption(option)}/>
              {this.state.showBuyerInfo ? (
                <Payment forms={this.state.forms} />
              ) : null}
            </DeliveryAndPaymentStyled>
          );
        }}
      </CartConsumer>
    );
  }
}
