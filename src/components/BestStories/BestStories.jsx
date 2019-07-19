import React, { useState, useEffect, Fragment } from "react";
import Stories from "./Stories.jsx";
import { getCancelableTopStories } from "../../apiCall";
const BestStories = () => {
  return (
    <Fragment>
      <Stories storiesType={getCancelableTopStories} />
    </Fragment>
  );
};

export default BestStories;
