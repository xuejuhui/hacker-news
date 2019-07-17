import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import "./story.css";
const Story = props => {
  const [story, setStory] = useState("");
  const [fade, setfade] = useState("fadeOut");
  useEffect(() => {
    axios
      .get(
        `https://hacker-news.firebaseio.com/v0/item/${props.story}.json?print=pretty`
      )
      .then(res => {
        setStory(res.data);
        setfade("fadeIn");
      });
  }, [props.story]);

  return (
    <div className={fade}>
      <a href={story.url}>{story.title}</a>
      <p>
        <span>{story.score}</span>
        <span>{story.time}</span>
        {story.by}
        {story.kids ? story.kids.length : ""}
      </p>
    </div>
  );
};
export default Story;
