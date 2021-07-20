import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";
function Wishlist() {
  const state = useSelector((state) => state.album);
  const dispatch = useDispatch();

  const { removeWishlist } = bindActionCreators(actionCreators, dispatch);
  console.log(state.wishlist);
  function onRemoveWishlist(event, index) {
    event.stopPropagation();
    removeWishlist(index);
  }
  return state.wishlist.map((wishlistItem, index) => {
    return (
      <ul>
        <li>
          <img src={wishlistItem.wishlistItem} alt="jddjdj" />

          <button onClick={(event) => onRemoveWishlist(event, index)}>
            Remove
          </button>
        </li>
      </ul>
    );
  });
}

export default Wishlist;
