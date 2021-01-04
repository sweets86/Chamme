import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";

const DropMenuStyled = styled.div<Props>`
  background-color: black;
  color: white;
  position: fixed;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  top: 0;
  right: 0;
  height: 35vh;
  width: 200px;
  padding-top: 3.5em;
  transition: transform 0.3s ease-in-out;
  border-radius: 10px;

  h3 {
    padding-left: 2.7em;
    margin: 0;
    padding-top: 25px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    padding: 8px 10px;
    display: inline-block;
    color: white;
  }

  @media screen and (max-width: 400px) {
    width: 86px;
    height: 30vh;

    h3 {
      padding-left: 10px;
    }

    ul {
      padding-left: 0;
    }
  }
`;

interface Props {
  open: boolean;
}

export default function DropMenu(props: Props) {
  return (
    <DropMenuStyled open={props.open}>
      <h3>Products</h3>
      <ul>
        <Link to="/products">
          <li>T-Shirts</li>
        </Link>
        <Link to="/products#fragrance">
          <li>Fragrance</li>
        </Link>
        <Link to="/products#lotion">
          <li>Lotion</li>
        </Link>
      </ul>
    </DropMenuStyled>
  );
}
