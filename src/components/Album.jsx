import React from "react";
import { useHistory } from "react-router-dom";
import "./Styles/Album.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function Album(props) {
  const history = useHistory();
  function handleCLick(event) {
    history.push("/photos", {
      imageId: props.id,
    });
  }
  return (
    <>
      <div className="album" onClick={handleCLick}>
        <ul className="list-group" list-group-flush>
          <li className="list list-group-item">
            <h1 className="title">{props.id}</h1>
            <h1 className="title">{props.title}</h1>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Album;
