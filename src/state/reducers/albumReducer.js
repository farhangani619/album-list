import {
  GET_ALBUM_LOADING,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_ERROR,
  GET_PHOTO_LOADING,
  GET_PHOTO_SUCCESS,
  GET_PHOTO_ERROR,
} from "../action-creator/index";
const initialState = {
  albums: [],
  photos: [],
  wishlist: [],
};
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM_LOADING: {
      return {
        ...state,
        albums: [],
      };
    }
    case GET_ALBUM_SUCCESS: {
      return {
        ...state,
        albums: action.data,
      };
    }
    case GET_ALBUM_ERROR: {
      return {
        ...state,
        albums: [],
      };
    }
    case GET_PHOTO_LOADING: {
      return {
        ...state,
        photos: [],
      };
    }
    case GET_PHOTO_SUCCESS: {
      return {
        ...state,
        photos: action.data,
      };
    }
    case GET_PHOTO_ERROR: {
      return {
        ...state,
        photos: [],
      };
    }
    case "WISHLIST": {
      return {
        ...state,

        wishlist: [
          ...state.wishlist,
          {
            wishlistItem: action.payload.thumbnailUrl,
            wishlisted: !state.wishlisted,
            id: action.payload.id,
          },
        ],
      };
    }
    case "REMOVEWISHLIST": {
      const wishlist = [...state.wishlist]; // copy the array
      wishlist.splice(action.index, 1);
      return {
        ...state,
        wishlist,
      };
    }
    default:
      return state;
  }
}
