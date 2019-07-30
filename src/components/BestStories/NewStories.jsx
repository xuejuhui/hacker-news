import React, { Fragment } from "react";
import Stories from "./Stories.jsx";
import { getCancelableNewStories } from "../../apiCall";
const NewStories = () => {
  return (
    <Fragment>
      <Stories storiesType={getCancelableNewStories} />
    </Fragment>
  );
};

export default NewStories;
