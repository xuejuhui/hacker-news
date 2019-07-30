import React, { Fragment } from "react";
import Stories from "./Stories.jsx";
import { getCancelableJobStories } from "../../apiCall";
const JobStories = () => {
  return (
    <Fragment>
      <Stories storiesType={getCancelableJobStories} />
    </Fragment>
  );
};

export default JobStories;
