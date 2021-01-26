import React, { useContext, useEffect, useState } from "react";
import OrderCardStyled from "./OrderCardStyled";
import { CartContext } from "../../contexts/cartContext";

interface Props {
  product: any;
  category: any;
  index: number;
  quantity: number;
}

export default function OrderCard(props: Props) {
  const context = useContext(CartContext);
  /* const [showQuantityHandler, setShowQuantityHandler] = useState(false); */
  const [listEveryProductId, setListEveryProductId] = useState(false);
  const [quantityHandler, setQuantityHandler] = useState(props.quantity);
  const [extrasColor, setExtrasColor] = useState("");
  const [extrasSize, setExtrasSize] = useState("");
  const [extraIndex, setExtraIndex] = useState(0);

  useEffect(() => {
    context.extras
      .filter((extra) => extra.productId === props.product.id)
      .map((extra: any, index: number) => {
        let color = extra.extrasColor;
        let size = extra.extrasSize;
        let extraIndex = index;

        setExtrasColor(color);
        setExtrasSize(size);
        setExtraIndex(extraIndex);
        return console.log(extraIndex);
      });

    if (props.category !== "T-shirts") {
      /* setShowQuantityHandler(true); */
      setListEveryProductId(true);
    }
  }, [context.extras, props.category, props.product.id]);

  function increaseCountHandler(product: any, index: number) {
    console.log(index);
    setQuantityHandler(function (quantity) {
      return quantity + 1;
    });
    return context.addProductToCart(
      product,
      extrasColor,
      extrasSize,
      product.id
    );
  }

  function decreaseCountHandler(product: any, index: number) {
    setQuantityHandler((quantity) => {
      if (quantity > 0) {
        return quantity - 1;
      }
      return 0;
    });
    context.deleteFromCart(product, index);
  }

  const deleteProduct = (product: any, index: number) => {
    decreaseCountHandler(product, index);
    console.log(context.cartItems);
  };

  const deleteTshirtProducts = (product: any, index: number) => {
    context.deleteExtrasFromExtras(
      extraIndex,
      extrasColor,
      extrasSize,
      product.id,
      product
    );
    context.extras.length
      ? context.deleteFromCart(product, index)
      : console.log(context.extras.length);
  };

  return (
    <>
      {listEveryProductId ? (
        <OrderCardStyled>
          <div className="imgDiv">
            {
              <img
                src={
                  require("../../assets/Products/" + props.product.img).default
                }
                alt="product img"
              />
            }
          </div>
          <div className="contentDiv">
            <div className="topDiv">
              {<h4>{props.product.brand}</h4>}
              <div className="deleteDiv">
                <div className="deleteBtnDiv">
                  <div
                    className="deleteBtn"
                    onClick={() => deleteProduct(props.product, props.index)}
                  ></div>
                </div>
              </div>
            </div>
            <div className="titleDiv">{<h3>{props.product.name}</h3>}</div>
            <div className="bottomDiv">
              {/* {showQuantityHandler ? (
                
                
              ) : null} */}

              <div className="quantityDiv">
                <span
                  className="minus"
                  onClick={() =>
                    decreaseCountHandler(props.product, props.index)
                  }
                >
                  -
                </span>
                <span className="quantity">{quantityHandler}</span>
                <span
                  className="plus"
                  onClick={() =>
                    increaseCountHandler(props.product, props.index)
                  }
                >
                  +
                </span>
              </div>
              {props.index}
              <div className="priceDiv">{props.product.price} Kr</div>
            </div>
            {/* <div className="if-t-shirts">
              {context.extras
                .filter((extra) => extra.productId === props.product.id)
                .map((extra, index) => {
                  let color = extra.extrasColor;
                  let size = extra.extrasSize;
                  return (
                    <div key={index}>
                      <h4>{color}</h4>
                      <h4>{size}</h4>
                      <h4>{index}</h4>
                    </div>
                  );
                })}
            </div> */}
          </div>
        </OrderCardStyled>
      ) : (
        context.extras
          .filter((extra) => extra.productId === props.product.id)
          .map((extra, index) => {
            return (
              <OrderCardStyled key={index}>
                <div className="imgDiv">
                  {
                    <img
                      src={
                        require("../../assets/Products/" + props.product.img)
                          .default
                      }
                      alt="product img"
                    />
                  }
                </div>
                <div className="contentDiv">
                  <div className="topDiv">
                    {<h4>{props.product.brand}</h4>}
                    <div className="deleteDiv">
                      <div className="deleteBtnDiv">
                        <div
                          className="deleteBtn"
                          onClick={() =>
                            deleteTshirtProducts(props.product, index)
                          }
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="titleDiv">
                    {<h3>{props.product.name}</h3>}
                  </div>
                  <div className="bottomDiv">
                    <div className="if-t-shirts">
                      <h4>{extra.extrasColor}</h4>
                      <h4>{extra.extrasSize}</h4>
                      <h4>{index}</h4>
                    </div>
                    <div className="priceDiv">{props.product.price} Kr</div>
                  </div>
                </div>
              </OrderCardStyled>
            );
          })
      )}
    </>
  );
}

/* {props.extras.map((extra: any, index: number) => {
  return (
    );
      })} */
