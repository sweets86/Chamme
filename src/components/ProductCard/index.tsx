import React, { useState, useContext } from "react";
import ProductCardStyled from "./ProductCardStyled";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext";
import Modal from "../Modal";

interface Props {
  product: any;
  category: string;
}

function ProductCard(props: Props) {
  const category = props.category;
  const context = useContext(CartContext);

  const [openModal, setOpenModal] = useState(false);

  const checkExtras = (product: string) => {
    if (product === "T-shirts") {
      setOpenModal(true);
    } else {
      setOpenModal(false);
      context.addProductToCart(props.product);
    }
  };

  const closeModal = () => {
    setOpenModal(false)
    console.log(openModal)
  }

  return (
    <ProductCardStyled>
      <Link
        to={{
          pathname: "/product/" + props.product.id,
          state: category,
        }}
      >
        <div className="imgDiv">
          <img
            src={
              require("./../../assets/Products/" + props.product.img).default
            }
            alt="product img"
          />
        </div>
      </Link>
      <div className="contentDiv">
        <h3>{props.product.name}</h3>
        <div className="price-and-btn-div">
          <h3>{props.product.price} Kr</h3>
          <button onClick={() => checkExtras(props.product.title)}>Köp</button>
        </div>
      </div>
      {openModal ? <Modal closeModal={closeModal} color={props.product.color} size={props.product.size}/> : null}
    </ProductCardStyled>
  );
}

export default ProductCard;
