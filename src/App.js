import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import TrackList from "./compononets/Tracklist/Tracklist";
import Playlist from "./compononets/Playlist/Playlist";
import { getAccessToken, handleLogIn } from "./app.module";

function App() {
  const data = [
    { id: 0, name: "kieran-can-sing", artist: "kieran", album: "kieransAlbum" },
    { id: 1, name: "sarin-can-sing", artist: "sarin", album: "sarinsAlbum" },
    { id: 2, name: "annabeth-can-sing", artist: "annabeth", album: "annabethsAlbum" },
  ];

  const [tracks, setTracks] = useState(data);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("playlist name");
  const [savedplaylist, setSavedplaylist] = useState({});
  const [token, setToken] = useState();

  useEffect(() => {
    if (window.location.hash) {
      setToken(getAccessToken().access_token);
    } else {
      handleLogIn();
    }
  });

  const URI = ["spotify:track:6eTGxxQxiTFE6LfZHC33Wm", "spotify:track:4QHfFzsVXbLewUmI2UMel5", "spotify:track:4sCCZW0ezEPAexAidFsoVm"];

  tracks.forEach((item, i) => {
    item.uri = URI[i];
  });

  const addSongToPlayList = (track) => {
    if (playlist.includes(track)) return;
    setPlaylist((current) => [...current, track]);
  };

  const removeSongFromPlaylist = (track) => {
    const filtered = playlist.filter((item) => item !== track);
    setPlaylist(filtered);
  };

  const setName = ({ target }) => {
    setPlaylistName(target.value);
  };

  const SaveOfflinePlaylist = () => {
    setSavedplaylist({ [playlistName]: playlist });
    // setPlaylistName("");
    setPlaylist([]);
    // console.log("saved platlist", savedplaylist);
  };
  return (
    <>
      <SearchBar token={token}></SearchBar>
      <TrackList tracks={tracks} addsong={addSongToPlayList}></TrackList>
      <Playlist token={token} onClick={SaveOfflinePlaylist} playlistName={playlistName} playlist={playlist} onChange={setName} removeSongFromPlaylist={removeSongFromPlaylist}></Playlist>
    </>
  );
}
export default App;

//make the result of the fetch look the same as the data sent into the original of app.js
