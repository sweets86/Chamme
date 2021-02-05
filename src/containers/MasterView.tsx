import React from "react";
import MasterViewStyled from "./MasterViewStyled";
import Footer from "../components/Footer/index";
import { Link } from "react-router-dom";
import Carousel from "./../components/Carousel";

export default function MasterView() {
  return (
    <MasterViewStyled>
      <Carousel />

      <div className="card">
        <Link to={"/gallery"}>
          <h1>Gallery</h1>
        </Link>

        <Link to={"/news"}>
          <h1>News</h1>
        </Link>

        <Link to={"/blog"}>
          <h1>Blog</h1>
        </Link>
      </div>
      <Footer />
    </MasterViewStyled>
  );
}
