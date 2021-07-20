import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/index";
import "./App.css";
import Album from "./components/Album";
import Photos from "./components/Photos";
import Wishlist from "./components/Wishlist";
import Nav from "./components/Nav";

function App() {
  const state = useSelector((state) => state.album);

  const dispatch = useDispatch();

  const { getAlbumPage } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getAlbumPage();
  }, []);
  return (
    <>
      <Nav />
      <Switch>
        <Route
          path="/"
          exact
          render={() => {
            return state.albums.map((album) => {
              return (
                <>
                  <Album key={album.id} id={album.id} title={album.title} />
                </>
              );
            });
          }}
        />
        <Route path="/photos" exact component={Photos} />
        <Route path="/wishlist" exact component={Wishlist} />
      </Switch>
    </>
  );
}

export default App;
