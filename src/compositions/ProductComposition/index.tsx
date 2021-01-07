import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductCompositionStyled from "./ProductCompositionStyled";
import { Products } from "./../../data/products";

interface Props {
  category: string;
}

export default function ProductComposition(props: Props) {
  return (
    <ProductCompositionStyled>
      <h1>{props.category}</h1>
      <div className="contain">
        {Products.map((product, index) => {
          if (props.category === product.title) {
            return <ProductCard product={product} />;
          }
        })}
      </div>
    </ProductCompositionStyled>
  );
}
