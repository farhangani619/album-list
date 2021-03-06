import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
import "./Styles/Wishlist.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Wishlist() {
  const state = useSelector((state) => state.album);
  const dispatch = useDispatch();

  const { removeWishlist } = bindActionCreators(actionCreators, dispatch);
  console.log(state.wishlist);
  function onRemoveWishlist(event, index) {
    event.stopPropagation();
    removeWishlist(index);
  }

  return (
    <div className="wishlist">
      {state.wishlist.map((wishlistItem, index) => {
        return (
          <div
            className="card mx-auto text-center mt-3 mb-3 wishlist-items wishlist-container"
            style={{ width: "12em" }}
          >
            <img
              className="card-img-top "
              src={wishlistItem.wishlistItem}
              alt="jddjdj"
            />
            <div>
              <button
                type="button"
                className="btn btn-danger button"
                onClick={(event) => onRemoveWishlist(event, index)}
              >
                Remove
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Wishlist;
