import mockAxios from "axios";
// import apiCall from "../apiCall";
import { getTopStories, getStoriesByLimit } from "../apiCall";
it("should call a fetchData function", () => {
  mockAxios.get.mockImplementationOnce(() => {
    return Promise.resolve({ data: [1, 2, 3] });
  });
  return getTopStories().then(response => {
    expect(response).toEqual({
      data: [1, 2, 3]
    });
    expect(mockAxios.get).toHaveBeenCalledWith(
      "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
    );
    expect(mockAxios.get).toHaveBeenCalledTimes(1);
  });
});

// test("fetches results from google books api", () => {
//   mockAxios.get.mockImplementationOnce(() => {
//     Promise.resolve("{ data: }");
//   });
//   return getTopStories().then(response => {
//     expect(response).toEqual([]);
//     expect(mockAxios.get).toHaveBeenCalledTimes(1);
//     expect(mockAxios.get).toHaveBeenCalledWith(
//       "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
//     );
//   });
// });
