import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import Playlist from "./compononets/Playlist/Playlist";
import { getAccessToken, handleLogIn } from "./app.module";

function App() {
  const [playlist, setPlaylist] = useState([]); // playlist holds selected songs.
  const [searchResults, setSearchResults] = useState(); //results of search
  const [token, setToken] = useState(); //auth token for api.

  useEffect(() => {
    if (window.location.hash) {
      setToken(getAccessToken().access_token);
    } else {
      handleLogIn();
    }
  });

  const addSongToPlayList = (track) => {
    setPlaylist((current) => [...current, track]);
    setSearchResults(searchResults.filter((item) => item.id !== track.id));
  };

  const removeSongFromPlaylist = (track) => {
    setPlaylist(playlist.filter((item) => item !== track));
    setSearchResults((current) => [track, ...current]);
  };

  return (
    <>
      <SearchBar token={token} function={addSongToPlayList} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
      <Playlist token={token} playlist={playlist} setPlaylist={setPlaylist} removeSongFromPlaylist={removeSongFromPlaylist}></Playlist>
    </>
  );
}
export default App;

//simplify working version.
