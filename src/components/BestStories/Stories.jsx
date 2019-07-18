import React, { useState, useEffect, Fragment } from "react";
// import axios from "axios";
import Story from "./Story.jsx";
import apiCall from "../../apiCall";

const Stories = () => {
  const [stories, setstories] = useState([]);
  const [offset, setoffset] = useState(0);
  useEffect(() => {
    apiCall.getTopStories().then(res =>
      apiCall.getStoriesByLimit(res.data, offset).then(res => {
        setstories(res.map(data => data.data));
      })
    );
  }, []);
  useEffect(() => {
    apiCall.getTopStories().then(res =>
      apiCall.getStoriesByLimit(res.data, offset).then(res => {
        setstories(res.map(data => data.data));
      })
    );
  }, [offset]);

  return (
    <Fragment>
      {stories.map(story => {
        return <Story story={story} key={story.id} />;
      })}
      <button
        onClick={() => {
          console.log("hi");
          setoffset(offset + 20);
        }}
      >
        More
      </button>
    </Fragment>
  );
};

export default Stories;
