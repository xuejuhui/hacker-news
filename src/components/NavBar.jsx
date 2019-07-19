import React, { useState } from "react";
import { Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

const NavBar = props => {
  const [activeItem, setActiveItem] = useState("news");
  const handleItemClick = e => {
    setActiveItem(e.target.text);
  };
  return (
    <Menu>
      <Menu.Item
        as={Link}
        to="/stories"
        name="news"
        active={activeItem === "news"}
        onClick={handleItemClick}
      >
        news
      </Menu.Item>

      <Menu.Item
        as={Link}
        to="/"
        name="best"
        active={activeItem === "best"}
        onClick={handleItemClick}
      >
        best
      </Menu.Item>

      <Menu.Item
        as={Link}
        to="/stories"
        name="ask"
        active={activeItem === "ask"}
        onClick={handleItemClick}
      >
        ask
      </Menu.Item>
    </Menu>
  );
};
export default NavBar;
