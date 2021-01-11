import React, { Component } from "react";
import { CartContext } from "../contexts/cartContext";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  count: number;
}

export interface ProviderState {
  cartItems: CartItem[];
}

export class CartProvider extends Component<{}, ProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cartItems: [],
    };
  }

  addProductToCart = (product: Product) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    if (findProductIndex === -1) {
      clonedCart.push({ product: product, quantity: 1, count: 1 });
    } else {
      clonedCart[findProductIndex].quantity++;
    }
    this.setState({ cartItems: clonedCart });
  };

  countCart = () => {
    let totQuantity: number = 0;
    this.state.cartItems.map((cartItem) => {
      return (totQuantity += cartItem.quantity);
    });

    return totQuantity;
  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addProductToCart: this.addProductToCart,
          countCart: this.countCart,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
