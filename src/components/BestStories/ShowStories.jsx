import React, { Fragment } from "react";
import Stories from "./Stories.jsx";
import { getCancelableShowStories } from "../../apiCall";
const ShowStories = () => {
  return (
    <Fragment>
      <Stories storiesType={getCancelableShowStories} />
    </Fragment>
  );
};

export default ShowStories;
