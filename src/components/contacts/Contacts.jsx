import React from "react";
import "./contacts.scss";

const Contacts = ({ menu, setMenu }) => {
  return (
    <div className='contact' id='contact' onClick={() => setMenu(false)}></div>
  );
};

export default Contacts;
