let API_URL = `https://jsonplaceholder.typicode.com/albums`;
export default {
  search(searchTerm) {
    if (searchTerm) {
      API_URL = `https://jsonplaceholder.typicode.com/album/${searchTerm}/photos`;
    }
    return fetch(API_URL, {
      method: "GET",
    });
    // return fetch(API_URL)
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //     return result;
    //   });
  },
};
