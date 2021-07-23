import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import "./Styles/Photos.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
      <div className="card mx-auto mt-3 mb-3 photo" style={{ width: "30rem" }}>
        <img
          className="card-img-top"
          src={photo.thumbnailUrl}
          alt={photo.title}
        />
        <div className="photo-container" key={photo.id}>
          <p className="card-text a">
            <a href={photo.url}>{photo.title}</a>
          </p>
          <button
            type="button"
            className="btn btn-success"
            onClick={(event) => onWishList(event, photo.thumbnailUrl, photo.id)}
          >
            wishlist
          </button>
        </div>
      </div>
    );
  });
}
export default Photos;
