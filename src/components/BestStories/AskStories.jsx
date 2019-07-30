import React, { Fragment } from "react";
import Stories from "./Stories.jsx";
import { getCancelableAskStories } from "../../apiCall";
const AskStories = () => {
  return (
    <Fragment>
      <Stories storiesType={getCancelableAskStories} />
    </Fragment>
  );
};

export default AskStories;
