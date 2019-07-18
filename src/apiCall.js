import axios from "axios";
const BASE_URL = "https://hacker-news.firebaseio.com/v0/";
const JSON_PRETTY = ".json?print=pretty";

const pageLimit = 20;

const getStoriesLimit = (limit, offset, stories) => {
  if (offset > stories.length) {
    console.log("No More");
  }
  return stories.slice(offset, offset + limit);
};

const getTopStories = () => {
  return axios.get(`${BASE_URL}topstories${JSON_PRETTY}`);
};
const getStroyById = id => {
  return axios.get(`${BASE_URL}item/${id}${JSON_PRETTY}`);
};

const getStoriesByLimit = (wholeIds, offset) => {
  const ids = getStoriesLimit(pageLimit, offset, wholeIds);
  const storiesPromise = ids.map(id => {
    return getStroyById(id);
  });
  return Promise.all(storiesPromise);
};

const apiCall = {
  getStoriesByLimit,
  getStroyById,
  getTopStories
};

export default apiCall;
