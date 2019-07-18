import React, { useState } from "react";
import { Menu } from "semantic-ui-react";

const Story = props => {
  const [activeItem, setActiveItem] = useState("news");
  return (
    <Menu>
      <Menu.Item
        name="news"
        active={activeItem === "news"}
        onClick={this.handleItemClick}
      >
        news
      </Menu.Item>

      <Menu.Item
        name="best"
        active={activeItem === "best"}
        onClick={this.handleItemClick}
      >
        best
      </Menu.Item>

      <Menu.Item
        name="ask"
        active={activeItem === "ask"}
        onClick={this.handleItemClick}
      >
        ask
      </Menu.Item>
    </Menu>
  );
};
export default Story;
