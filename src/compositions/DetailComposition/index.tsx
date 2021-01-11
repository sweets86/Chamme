import React, { useEffect, useState } from "react";
import DetailCompositionStyled from "./DetailCompositionStyled";
import { RouteComponentProps, useLocation, withRouter } from "react-router-dom";
import { Product, Products } from "../../data/products";
import { CartConsumer, ContextState } from "../../contexts/cartContext";
import Detail from "../../components/Detail";

interface Params {
  id: string;
}

interface Props extends RouteComponentProps<Params> {}

const products: Product[] = Products;

function DetailComposition(props: Props) {
  const id = props.match.params.id;
  const numberId = parseFloat(id);
  const location = useLocation();
  const state = location.state as string;

  const [detailComponent, setDetailComponent] = useState(false);

  useEffect(() => {
    if (state === "T-shirts") {
      setDetailComponent(true);
    } else setDetailComponent(false);
    return;
  }, [state]);

  return (
    <DetailCompositionStyled>
      {products
        .filter((product) => product.id === numberId)
        .map((product) => {
          return (
            <div className="contain" key={product.id}>
              <div className="imgDiv">
                <img
                  src={require("../../assets/Products/" + product.img).default}
                  alt="no avaible"
                />
              </div>
              <div className="contentDiv">
                <h4>{product.brand}</h4>
                <h2>{product.name}</h2>
                <h2>{product.price} kr</h2>
                <CartConsumer>
                  {(contextData: ContextState) => {
                    return (
                      <button
                        className="buyBtn"
                        onClick={() => contextData.addProductToCart(product)}
                      >
                        Köp
                      </button>
                    );
                  }}
                </CartConsumer>
                <h5>{product.status}</h5>
                <h5>Leveransstatus {product.deliver}</h5>
                <p className="description">{product.description}</p>
                <p>{product.content}</p>
                <p>{product.extra}</p>
                {detailComponent ? <Detail size={product.size} color={product.color} /> : null}
              </div>
            </div>
          );
        })}
    </DetailCompositionStyled>
  );
}

export default withRouter(DetailComposition);
