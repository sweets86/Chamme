import React from "react";
import ContactInfoStyled from "./ContactInfoStyled";

export default function ContactInfo() {
  return (
    <ContactInfoStyled>
      <h2>Dina Kontaktuppgifter</h2>
      <div className="adressContainer">
        <div className="adress">Mail</div>
        <div className="adress">Mobilnummer</div>
      </div>
    </ContactInfoStyled>
  );
}
