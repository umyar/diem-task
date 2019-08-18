import React from "react";
import Phone from "@material-ui/icons/Phone";
import Email from "@material-ui/icons/Email";

const Contacts = () => {
  return (
    <section className="contacts">
      <h2>Contacts</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      <ul>
        <li className="contact-item">
          <Phone />
          <span>Telephone: </span>89988990009
        </li>
        <li className="contact-item">
          <Email />
          <span>E-mail: </span>foo@bar.baz
        </li>
      </ul>
    </section>
  );
};

export default Contacts;
