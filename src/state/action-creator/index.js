import API from "../../API";
export const GET_ALBUM_LOADING = "REDUX_THUNK_GET_ALBUM_LOADING";
export const GET_ALBUM_SUCCESS = "REDUX_THUNK_GET_ALBUM_SUCCESS";
export const GET_ALBUM_ERROR = "REDUX_THUNK_GET_ALBUM_ERROR";
export const GET_PHOTO_LOADING = "REDUX_THUNK_GET_PHOTO_LOADING";
export const GET_PHOTO_SUCCESS = "REDUX_THUNK_GET_PHOTO_SUCCESS";
export const GET_PHOTO_ERROR = "REDUX_THUNK_GET_PHOTO_ERROR";
export const getAlbumPage = () => {
  return (dispatch) => {
    dispatch({ type: GET_ALBUM_LOADING });
    API.search()
      .then((response) => response.json())
      .then(
        (data) => dispatch({ type: GET_ALBUM_SUCCESS, data }),
        (error) =>
          dispatch({
            type: GET_ALBUM_ERROR,
            error: error.message || "Unexpected Error!!!",
          })
      );
  };
};

export const getPhotosPage = (searchTerm) => {
  return (dispatch) => {
    dispatch({ type: GET_PHOTO_LOADING });
    API.search(searchTerm)
      .then((response) => response.json())
      .then(
        (data) => dispatch({ type: GET_PHOTO_SUCCESS, data }),
        (error) =>
          dispatch({
            type: GET_PHOTO_ERROR,
            error: error.message || "Unexpected Error!!!",
          })
      );
  };
};
export const wishlistPage = (thumbnailUrl, id) => {
  return (dispatch) => {
    dispatch({
      type: "WISHLIST",
      payload: { thumbnailUrl, id },
    });
  };
};
export const getWishlistPage = (thumbnailUrl) => {
  return (dispatch) => {
    dispatch({
      type: "GETWISHLIST",
      payload: thumbnailUrl,
    });
  };
};
export const removeWishlist = (index) => {
  return (dispatch) => {
    dispatch({
      type: "REMOVEWISHLIST",
      payload: index,
    });
  };
};
