import React from "react";
import "./menu.scss";
import MenuList from "./MenuList";

const Menu = ({ menu, setMenu }) => {
  return (
    <div className={"menu " + (menu && "active")}>
      <ul>
        <MenuList menu={menu} setMenu={setMenu} />
      </ul>
    </div>
  );
};

export default Menu;
