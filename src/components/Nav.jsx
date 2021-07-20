import React from "react";
import { useHistory } from "react-router-dom";

function Nav() {
  const history = useHistory();
  function getHome(event) {
    event.stopPropagation();
    history.push("/");
  }
  function getWishlist(event) {
    event.stopPropagation();
    history.push("/wishlist");
  }
  return (
    <>
      <button onClick={(event) => getHome(event)}>Home</button>
      <button onClick={(event) => getWishlist(event)}>Wishlist</button>
    </>
  );
}
export default Nav;
