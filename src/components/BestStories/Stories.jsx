import React, { useState, useEffect, Fragment } from "react";
import Story from "./Story.jsx";
import { getCancelableTopStories } from "../../apiCall";

const Stories = () => {
  const [stories, setstories] = useState([]);
  const [offset, setoffset] = useState(0);
  const getTopStories = getCancelableTopStories(offset);
  useEffect(() => {
    getTopStories.promise
      .then(res => setstories(res))
      .catch(err => console.log(err));
  }, []);

  useEffect(() => {
    return () => {
      getTopStories.cancel();
    };
  }, []);

  useEffect(() => {
    getTopStories.promise
      .then(res => setstories(res))
      .catch(err => console.log(err));
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
