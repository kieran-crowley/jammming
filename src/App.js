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

  console.log(searchResults);
  return (
    <>
      <SearchBar token={token} function={addSongToPlayList} searchResults={searchResults} setSearchResults={setSearchResults}></SearchBar>
      {/* //gets results formts them and stores them inside results.  */}
      <Playlist token={token} playlist={playlist} setPlaylist={setPlaylist} function={removeSongFromPlaylist}></Playlist>
      {/* shows selected songs and allows you to add name, sends off to spotify server api */}
    </>
  );
}
export default App;

//simplify working version.
