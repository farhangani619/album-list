import React from "react";
import { useHistory } from "react-router-dom";
import "./Styles/Nav.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

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
      <nav class="navbar navbar-light bg-light nav">
        <button
          className="btn btn-outline-success me-2"
          onClick={(event) => getHome(event)}
        >
          Home
        </button>
        <button
          className="btn btn-outline-success me-2"
          onClick={(event) => getWishlist(event)}
        >
          Wishlist
        </button>
      </nav>
    </>
  );
}
export default Nav;
