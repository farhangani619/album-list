import API from "./API";
const initialState = {
  albums: [],
};
export const actions = {
  getAlbumPage() {
    return { type: "GET_ALBUM", payload: API.search() };
  },
};
export const photos = (searchTerm) => {
  return (dispatch) => {
    dispatch({
      type: "GET_PHOTOS",
      payload: API.search(searchTerm),
    });
  };
};
export function reducer(state = initialState, action) {
  switch (action.type) {
    case "GET_ALBUM_PENDING": {
      return {
        ...state,
        albums: [],
      };
    }
    case "GET_ALBUM_FULFILLED": {
      return {
        ...state,
        albums: action.payload,
      };
    }
    default:
      return state;
  }
}
