import React, { Fragment, useEffect, useState } from "react";
import { getStory } from "../../apiCall";
import { List } from "semantic-ui-react";
import funIcons from "../funIcons";

const StoryPage = props => {
  const [story, setstory] = useState({});
  useEffect(() => {
    const { id } = props.match.params;
    getStory(id).then(res => setstory(res));
  }, []);
  const { Item, Icon, Content, Header, Description } = List;
  console.log(story);
  const { id, url, title, score, time, kids = [], by } = story;
  let icons = funIcons();
  return (
    <Fragment>
      <List divided relaxed key={id}>
        <Item>
          <Icon className={icons} size="large" verticalAlign="middle" />
          <Content>
            <Header as="a" href={url}>
              {title}
            </Header>
            <Description>
              {score} points {new Date(time * 1000).toString()} by {by}{" "}
              {kids.length} Comments
            </Description>
          </Content>
        </Item>
      </List>
    </Fragment>
  );
};

export default StoryPage;
