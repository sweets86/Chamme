import React, { Component } from "react";
import { CartContext } from "../contexts/cartContext";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  count: number;
  /* extras: {}; */
}

export interface Extras {
  extrasColor: string;
  extrasSize: string;
  productId: number;
  productIndex: number;
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

  addProductToCart = (
    product: Product,
    extrasColor: string,
    extrasSize: string,
    productId: number,
    productIndex: number
  ) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    /* const findExtrasIndex: number = this.state.extras.findIndex(
      (foundIndex) => {
        return productIndex === foundIndex.productIndex
      }
    ) */

    if (extrasColor !== "") {
      clonedExtras.push({ extrasColor, extrasSize, productId, productIndex });
      this.setState({ extras: clonedExtras });
    } else {
      console.log(clonedExtras);
    }

    const idArray: any = [];

    clonedExtras
      .filter((obj) => obj.productId === product.id)
      .map((object, index) => {
        if (clonedExtras.includes(object) && object.extrasColor !== "") {
          idArray.push(object, index++);
        }
        return console.log(index)
      }); 

    

    if (findProductIndex === -1) {
      
      clonedCart.push({
        product: product,
        quantity: 1,
        count: 1,
        /* extras: idArray, */
      });
    } /* else if (productId === product.id) {
      clonedCart.splice(findExtrasIndex, 1, {
        product: product,
        quantity: 1,
        count: 1,
        extras: idArray,
      });
      clonedCart[findProductIndex].quantity++;

      if (idArray.length > 2) {
        clonedCart[findProductIndex].quantity++;
      }
    }  */else {
      clonedCart[findProductIndex].quantity++;
    }

    this.setState({ cartItems: clonedCart });
    console.log(clonedCart);
    console.log(findProductIndex)
  };

  deleteFromCart = (product: Product, index: number) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    if (findProductIndex === -1 || clonedCart[findProductIndex].quantity <= 1) {
      clonedCart.splice(index, 1, {
        product: product,
        quantity: -1,
        count: -1,
        /* extras: {}, */
      });
      clonedCart.splice(index, 1);
      console.log(index)
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

  countOrders = () => {
    let individualCount: number = 0;
    this.state.cartItems
      .filter((cartItem) => cartItem.product.id === cartItem.count)
      .map((cartItem) => {
        return (individualCount += cartItem.count * cartItem.quantity);
      });
    return individualCount;
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
          countOrders: this.countOrders,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
