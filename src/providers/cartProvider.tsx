import React, { Component } from "react";
import { CartContext } from "../contexts/cartContext";
import { Product } from "../data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  count: number;
  extras: {};
}

export interface Extras {
  extrasColor: string;
  extrasSize: string;
  productId: number;
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
    productId: number
  ) => {
    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);

    const findProductIndex: number = this.state.cartItems.findIndex(
      (foundProduct) => {
        return product.id === foundProduct.product.id;
      }
    );

    // Den lägger bara till ny extras när det är ett produktid som inte är vald. Så för varje produktid en gång så lägger den till ett objectet till listan.
    // Jag vill att den lägger till flera object till listan där produktid är samma.
    // Tydligen för varje gång man lägger till ett nytt id så uppdateras listan? Det är denna som styr det: findProductIndex === -1

    if (extrasColor !== "") {
      clonedExtras.push({ extrasColor, extrasSize, productId });
      this.setState({ extras: clonedExtras });
    } else {
      console.log(clonedExtras);
    }

    const idArray: any = [];

    clonedExtras
      .filter((obj) => obj.productId === product.id)
      .map((object) => {
        if (clonedExtras.includes(object) && object.extrasColor !== "") {
          console.log(object);
          idArray.push(object);
        }
        return clonedCart;
      });
    console.log(idArray);

    if (findProductIndex === -1) {
      console.log(findProductIndex);
      /* if (extrasColor && extrasSize !== "" && productId === product.id) { */
      clonedCart.push({
        product: product,
        quantity: 1,
        count: 1,
        extras: idArray,
      });
      /* clonedExtras
          .filter((obj) => obj.productId === product.id)
          .map((object) => {
            if (clonedExtras.includes(object)) {
              
            }
            return clonedCart;
          }); */

      /* clonedExtras
          .filter((object) => object.productId === product.id)
          .map((object) => {
            const extrasObj = object;
            return clonedCart.push({
              product: product,
              quantity: 1,
              count: 1,
              extras: extrasObj,
            });
          }); */
      /* } else {
        console.log("Ingen färg och storlek vald..");
      }  */
    } else if (productId === product.id) {
      /* clonedCart.push({
        product: product,
        quantity: 1,
        count: 1,
        extras: idArray
      }); */
      clonedCart.splice(findProductIndex, 1, {
        product: product,
        quantity: 1,
        count: 1,
        extras: idArray,
      });
      clonedCart[findProductIndex].quantity++;

      if (idArray.length > 2) {
        clonedCart[findProductIndex].quantity++;
        console.log(idArray.length);
      }
    } else {
      clonedCart[findProductIndex].quantity++;

      console.log(findProductIndex);
      console.log(idArray);
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
        extras: {},
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

  /* setExtras = (
    extrasColor: string,
    extrasSize: string,
    productId: number,
  ) => {
    const clonedExtras: Extras[] = Object.assign([], this.state.extras);
    if (extrasColor !== "" || extrasSize !== "") {
      clonedExtras.push({ extrasColor, extrasSize, productId });
      this.setState({ extras: clonedExtras });
      console.log(clonedExtras);
    } else {
      console.log("Ingen färg och storlek vald..");
    }

    const clonedCart: CartItem[] = Object.assign([], this.state.cartItems);
    this.state.cartItems.map((productId) => {
      const getID = productId.product.id
      return productId.product.id
    })
    clonedExtras
      .filter((object) => productId === getID
      .map((object) => {
        const extrasObj = object;

        clonedCart.push({
          product: this.state.cartItems,
          quantity: 1,
          count: 1,
          extras: extrasObj,
        });
        this.setState({ cartItems: clonedCart });
        return console.log(clonedCart);
      });
  }; */

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
          /* setExtras: this.setExtras, */
          countOrders: this.countOrders,
        }}
      >
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
