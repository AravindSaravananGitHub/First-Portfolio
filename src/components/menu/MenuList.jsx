import React from "react";

const MenuList = ({ menu, setMenu }) => {
  const lists = ["home", "about", "education", "skills", "projects", "contact"];
  return (
    <>
      {lists.map((list, index) => (
        <li onClick={() => setMenu(!menu)} key={index}>
          <a href={`#${list}`}>
            {list.charAt(0).toUpperCase() + list.slice(1)}
          </a>
        </li>
      ))}
    </>
  );
};

export default MenuList;
