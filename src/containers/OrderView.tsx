import React from "react";
import { Link } from "react-router-dom";

export default function OrderView() {
  return (
    <div>
      <Link to={"/detail"}>
        <h1 style={{display: "inline-block", color: "black"}}>OrderView</h1>
      </Link>
    </div>
  );
}
