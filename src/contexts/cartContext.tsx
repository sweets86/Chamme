import { createContext } from "react";
import { ProviderState } from "../providers/cartProvider";
import { Product } from "./../data/products";

export interface ContextState extends ProviderState {
  addProductToCart: (product: Product, extrasColor: string, extrasSize: string, productId: number) => void;
  countCart: () => number;
  deleteFromCart: (product: Product, index: number) => void;
  totalPrice: () => number;
  getVAT: () => number;
  /* setExtras: (extrasColor: string, extrasSize: string, productId: number) => void; */
  countOrders: () => number;
}

export const CartContext = createContext<ContextState>({
  cartItems: [],
  extras: [],
  addProductToCart: (product: Product) => {
    console.log(
      "Something went wrong with adding " + product.name + " to the cart..."
    );
  },
  countCart: () => 0,
  deleteFromCart: (product: Product) => {
    console.log(
      "Something went wrong while deleting" + product.name + "to cart."
    );
  },
  totalPrice: () => 0,
  getVAT: () => 0,
  /* setExtras: () => {}, */
  countOrders: () => 0
});

export const CartConsumer = CartContext.Consumer;
