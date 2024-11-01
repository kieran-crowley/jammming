import "./App.css";
import React, { useState } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import TrackList from "./compononets/Tracklist/Tracklist";
import Playlist from "./compononets/Playlist/Playlist";

function App() {
  const tracks = [
    { key: 0, id: 0, song: "kieran-can-sing", artist: "kieran", album: "kieransAlbum" },
    { key: 1, id: 1, song: "sarin-can-sing", artist: "sarin", album: "sarinsAlbum" },
    { key: 2, id: 2, song: "annabeth-can-sing", artist: "annabeth", album: "annabethsAlbum" },
  ];

  const [data, setData] = useState(tracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("eer");

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

  return (
    <>
      <SearchBar></SearchBar>
      <TrackList data={data} playlistfunction={addSongToPlayList}></TrackList>
      <Playlist
        playlistfunction={removeSongFromPlaylist}
        playlistName={playlistName}
        setName={setName}
        data={playlist}
        title={playlistName}
        onChange={setName}
      ></Playlist>
    </>
  );
}
export default App;

// The root component should pass down the search results to
// a child component that will return each individual track to be rendered.
