import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

function Photos(props) {
  const state = useSelector((state) => state.album);

  const dispatch = useDispatch();

  const { getPhotosPage, wishlistPage } = bindActionCreators(
    actionCreators,
    dispatch
  );
  useEffect(() => {
    getPhotosPage(props.location.state.imageId);
  }, []);
  function onWishList(event, thumbnailUrl, id) {
    event.stopPropagation();
    wishlistPage(thumbnailUrl, id);
  }
  console.log(state);
  return state.photos.map((photo) => {
    return (
      <ul>
        <li key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
          <a href={photo.url}>{photo.title}</a>
          <button
            onClick={(event) => onWishList(event, photo.thumbnailUrl, photo.id)}
          >
            wishlist
          </button>
        </li>
      </ul>
    );
  });
}
export default Photos;
