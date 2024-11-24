import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import Playlist from "./compononets/Playlist/Playlist";
import { getAccessToken, handleLogIn } from "./app.module";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [token, setToken] = useState();

  useEffect(() => {
    if (window.location.hash) {
      setToken(getAccessToken().access_token);
    } else {
      handleLogIn();
    }
  });

  const addSongToPlayList = (track) => {
    if (JSON.stringify(playlist).includes(JSON.stringify(track))) return;
    setPlaylist((current) => [...current, track]);
  };

  return (
    <>
      <SearchBar token={token} function={addSongToPlayList}></SearchBar> 
      <Playlist token={token} playlist={playlist} setPlaylist={setPlaylist}></Playlist>
    </>
  );
}
export default App;
