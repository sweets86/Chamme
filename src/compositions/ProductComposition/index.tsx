import React from "react";
import ProductCard from "../../components/ProductCard";
import ProductCompositionStyled from "./ProductCompositionStyled";

interface Props {
  category: string;
}

export default function ProductComposition(props: Props) {
  return (
    <ProductCompositionStyled>
      <h1>{props.category}</h1>
      <div className="contain">
        <ProductCard name={props.category} />
        <ProductCard name={props.category} />
        <ProductCard name={props.category} />
        <ProductCard name={props.category} />
        <ProductCard name={props.category} />
      </div>
    </ProductCompositionStyled>
  );
}
