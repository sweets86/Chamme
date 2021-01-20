import React, { Component } from "react";
import { CartContext } from "../contexts/cartContext";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  count: number;
}

export interface Extras {
  extrasColor: string;
  extrasSize: string;
}

export interface ProviderState {
  cartItems: CartItem[];
  extras: Extras[];
}

export class CartProvider extends Component<{}, ProviderState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      cartItems: [],
      extras: [],
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
    console.log(clonedCart);
  };

  deleteFromCart = (product: Product, index: number) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );
    console.log(findProductIndex);

    if (findProductIndex === -1 || clonedCart[findProductIndex].quantity <= 1) {
      clonedCart.splice(index, 1, {
        product: product,
        quantity: -1,
        count: -1,
      });
      clonedCart.splice(index, 1);
    } else {
      clonedCart[findProductIndex].quantity--;
    }

    this.setState({ cartItems: clonedCart }, () => {
      console.log(this.state);
    });
  };

  countCart = () => {
    let totQuantity: number = 0;
    this.state.cartItems.map((cartItem) => {
      return (totQuantity += cartItem.quantity);
    });

    return totQuantity;
  };

  totalPrice = () => {
    let totPrice: number = 0;
    this.state.cartItems.map((cartItem) => {
      return (totPrice += cartItem.quantity * cartItem.product.price);
    });
    return totPrice;
  };

  getVAT = () => {
    let productVAT: number = 0;
    this.state.cartItems.map((VAT) => {
      return (productVAT = productVAT + VAT.product.price * 0.2 * VAT.quantity);
    });
    return Math.round(productVAT * 100 + Number.EPSILON) / 100;
  };

  setExtras = (extrasColor: string, extrasSize: string) => {
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);
    if (extrasColor !== "" || extrasSize !== "") {
      clonedExtras.push({ extrasColor, extrasSize});
      this.setState({ extras: clonedExtras });
      console.log(clonedExtras);
    } else {
      console.log("Ingen färg och storlek vald..")
    }

  };

  render() {
    return (
      <CartContext.Provider
        value={{
          ...this.state,
          addProductToCart: this.addProductToCart,
          deleteFromCart: this.deleteFromCart,
          countCart: this.countCart,
          totalPrice: this.totalPrice,
          getVAT: this.getVAT,
          setExtras: this.setExtras,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
