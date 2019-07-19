import React, { useState, useEffect, Fragment } from "react";
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
