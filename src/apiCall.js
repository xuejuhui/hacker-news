import axios from "axios";
import { makeCancelable } from "./utils";
const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
const JSON_PRETTY = ".json?print=pretty";

const pageLimit = 20;

const getStoriesLimit = (limit, offset, stories) => {
  if (offset > stories.length) {
    console.log("No More");
  }
  return stories.slice(offset, offset + limit);
};

let getTopStories = () => {
  return axios.get(`${BASE_URL}topstories${JSON_PRETTY}`);
};
let getStroyById = id => {
  return axios.get(`${BASE_URL}item/${id}${JSON_PRETTY}`);
};
const getNewStories = () => {
  return axios.get(`${BASE_URL}newstories${JSON_PRETTY}`);
};
const getAskStories = () => {
  return axios.get(`${BASE_URL}askstories${JSON_PRETTY}`);
};
const getShowStories = () => {
  return axios.get(`${BASE_URL}showstories${JSON_PRETTY}`);
};
const getJobStories = () => {
  return axios.get(`${BASE_URL}jobstories${JSON_PRETTY}`);
};

const getStory = id => {
  return getStroyById(id).then(res => res.data);
};
const getStoriesByLimit = (wholeIds, offset) => {
  const ids = getStoriesLimit(pageLimit, offset, wholeIds);
  const storiesPromise = ids.map(id => {
    return getStroyById(id);
  });
  return Promise.all(storiesPromise);
};

const getCancelableTopStories = (offset = 0) => {
  return makeCancelable(
    getTopStories().then(res => {
      return getStoriesByLimit(res.data, offset).then(res => {
        return res.map(data => data.data);
      });
    })
  );
};

const getCancelableNewStories = (offset = 0) => {
  return makeCancelable(
    getNewStories().then(res => {
      return getStoriesByLimit(res.data, offset).then(res => {
        return res.map(data => data.data);
      });
    })
  );
};

const getCancelableAskStories = (offset = 0) => {
  return makeCancelable(
    getAskStories().then(res => {
      return getStoriesByLimit(res.data, offset).then(res => {
        return res.map(data => data.data);
      });
    })
  );
};
const getCancelableShowStories = (offset = 0) => {
  return makeCancelable(
    getShowStories().then(res => {
      return getStoriesByLimit(res.data, offset).then(res => {
        return res.map(data => data.data);
      });
    })
  );
};
const getCancelableJobStories = (offset = 0) => {
  return makeCancelable(
    getJobStories().then(res => {
      return getStoriesByLimit(res.data, offset).then(res => {
        return res.map(data => data.data);
      });
    })
  );
};

export {
  getStroyById,
  getCancelableTopStories,
  getCancelableNewStories,
  getCancelableAskStories,
  getCancelableShowStories,
  getCancelableJobStories,
  getStory
};
