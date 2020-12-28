import React, { useEffect, useState } from "react";
import HeaderBase from "../../components/HeaderBase/index";
import { RouteComponentProps, withRouter } from "react-router-dom";
import HeaderMain from "../../components/HeaderMain";
import HeaderDark from "../../components/HeaderDark";
import HeaderLight from "../../components/HeaderLight";

interface Params {
  privacy: string;
}

interface Props extends RouteComponentProps<Params> {}

function Navbar(props: Props) {
  const headerBase = props.location.pathname;
  console.log(headerBase);

  const [renderViewDetail, setRenderViewDetail] = useState(false);
  const [renderViewProducts, setRenderViewProducts] = useState(false);
  const [renderViewMain, setRenderViewMain] = useState(false);
  const [renderViewOther, setRenderViewOther] = useState(false);

  useEffect(() => {
    if (headerBase === "/") {
      setRenderViewMain(true);
    } else if (headerBase === "/products") {
      setRenderViewProducts(true);
    } else if (headerBase === "/detail") {
      setRenderViewDetail(true);
    } else {
      setRenderViewOther(true);
    }
  }, [headerBase]);

  return (
    <div>
      {renderViewOther ? (
        <HeaderBase />
      ) : renderViewMain ? (
        <HeaderMain />
      ) : renderViewProducts ? (
        <HeaderDark />
      ) : renderViewDetail ? (
        <HeaderLight />
      ) : null}
    </div>
  );
}

export default withRouter(Navbar);
