import React from "react";
import { List } from "semantic-ui-react";
import funIcons from "../funIcons";

const Story = React.memo(({ story }) => {
  const { id, url, title, score, time, kids = [], by } = story;
  let icons = funIcons();
  return (
    <List divided relaxed key={id}>
      <List.Item>
        <List.Icon className={icons} size="large" verticalAlign="middle" />
        <List.Content>
          <List.Header as="a" href={url}>
            {title}
          </List.Header>
          <List.Description as="a">
            {score} points {new Date(time * 1000).toISOString()} by {by}{" "}
            {kids.length} Comments
          </List.Description>
        </List.Content>
      </List.Item>
    </List>
  );
});
export default Story;
