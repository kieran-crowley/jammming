import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import Playlist from "./compononets/Playlist/Playlist";
import { getAccessToken, handleLogIn } from "./app.module";

function App() {
  const [playlist, setPlaylist] = useState([]); // current set
  const [searchResults, setSearchResults] = useState();
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

    //search result section remove from search
    const filtered = searchResults.filter((item) => item.id != track.id); //change to !=
    setSearchResults(filtered);
    console.log("addtrack", track);
  };

  const removeSongFromPlaylist = (track) => {
    const checkint = track;
    const filtered = playlist.filter((item) => item != track);
    setPlaylist(filtered); //everything inside current playlist except track

    //search result section
    setSearchResults((current) => [checkint, ...current]);
    console.log("rem track", checkint);
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
