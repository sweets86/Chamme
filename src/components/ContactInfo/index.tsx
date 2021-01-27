import React from "react";
import ContactInfoStyled from "./ContactInfoStyled";

export default function ContactInfo() {
  return (
    <ContactInfoStyled>
      <h2>Dina Kontaktuppgifter</h2>
      <div className="contactContainer">
        <div className="contact">Mail</div>
        <div className="contact">Mobilnummer</div>
      </div>
    </ContactInfoStyled>
  );
}
