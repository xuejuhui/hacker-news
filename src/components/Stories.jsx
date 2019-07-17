import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Story from "./Story.jsx";
import "./story.css";

const Stories = () => {
  const [stories, setstories] = useState([]);
  const [fewStories, setFewStories] = useState([]);
  const [offset, setoffset] = useState("");
  useEffect(() => {
    axios
      .get("https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty")
      .then(res => {
        setstories(res.data);
        setoffset(0);
      });
  }, []);
  useEffect(() => {
    setFewStories(stories.slice(offset, offset + 30));
  }, [offset]);

  console.log(fewStories);
  return (
    <Fragment>
      <button
        onClick={() => {
          console.log("hi");
          setoffset(offset + 30);
        }}
      >
        More
      </button>
      {fewStories.map(story => {
        return (
          <div key={story} className="fadeIn">
            <Story story={story} />
          </div>
        );
      })}
    </Fragment>
  );
};

export default Stories;
