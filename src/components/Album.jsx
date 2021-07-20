import React from "react";
import { useHistory } from "react-router-dom";
function Album(props) {
  const history = useHistory();
  function handleCLick(event) {
    history.push("/photos", {
      imageId: props.id,
    });
  }
  return (
    <>
      <div onClick={handleCLick}>
        <ul>
          <li>
            <h1>{props.id}</h1>
            <h2>{props.title}</h2>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Album;
