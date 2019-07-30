import React from "react";
import { List } from "semantic-ui-react";
import funIcons from "../funIcons";
import { Link } from "react-router-dom";
const Story = React.memo(({ story }) => {
  const { id, url, title, score, time, kids = [], by } = story;
  let icons = funIcons();
  const { Item, Icon, Content, Header, Description } = List;
  return (
    <List divided relaxed key={id}>
      <Item>
        <Icon className={icons} size="large" verticalAlign="middle" />
        <Content>
          <Header as="a" href={url}>
            {title}
          </Header>
          <Description as={Link} to={`/story/${id}`}>
            {score} points {new Date(time * 1000).toISOString()} by {by}{" "}
            {kids.length} Comments
          </Description>
        </Content>
      </Item>
    </List>
  );
});
export default Story;
