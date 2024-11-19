import "./App.css";
import React, { useState, useEffect } from "react";
import SearchBar from "./compononets/SearchBar/SearchBar";
import TrackList from "./compononets/Tracklist/Tracklist";
import Playlist from "./compononets/Playlist/Playlist";
// import SaveToSpotifyButton from "./compononets/SaveToSpotifyButton/SaveToSpotifyButton";

function App() {
  const tracks = [
    { key: 0, id: 0, song: "kieran-can-sing", artist: "kieran", album: "kieransAlbum" },
    { key: 1, id: 1, song: "sarin-can-sing", artist: "sarin", album: "sarinsAlbum" },
    { key: 2, id: 2, song: "annabeth-can-sing", artist: "annabeth", album: "annabethsAlbum" },
  ];

  const URI = ["spotify:track:6eTGxxQxiTFE6LfZHC33Wm", "spotify:track:4QHfFzsVXbLewUmI2UMel5", "spotify:track:4sCCZW0ezEPAexAidFsoVm"];

  tracks.forEach((item, i) => {
    item.uri = URI[i];
  });

  const [data, setData] = useState(tracks);
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState("efedefefer");
  const [savedplaylist, setSavedplaylist] = useState({});

  const addSongToPlayList = (track) => {
    if (playlist.includes(track)) return;
    setPlaylist((current) => [...current, track]);
    console.log(playlist);
  };

  const removeSongFromPlaylist = (track) => {
    const filtered = playlist.filter((item) => item !== track);
    setPlaylist(filtered);
  };

  const setName = ({ target }) => {
    setPlaylistName(target.value);
  };

  const SaveToSpotify = () => {
    // setSavedplaylist({ [playlistName]: playlist }); saves locally
    //new method to replace here. 
    setPlaylistName("");
    setPlaylist([]);
    // console.log("saved platlist", savedplaylist);
  };

  return (
    <>
      {/* <SearchBar></SearchBar> */}
      <TrackList data={data} function={addSongToPlayList}></TrackList>
      {/* tracklist: prints data and button, button adds song if doesnt exist. */}
      <Playlist onClick={SaveToSpotify} playlistName={playlistName} data={playlist} onChange={setName} removeSongFromPlaylist={removeSongFromPlaylist}></Playlist>
      {/* playlist takes name which can be changed using onchange */}
      {/* platlist takes data and uris and combines them within(why),  */}
      {/* platlist onchange changes name within input within itself.  */}
      {/* playlist takes function that removes song from playlist if it exists.   */}
      {/* platlist takes onclick that saves data as playlist.  */}
    </>
  );
}
export default App;
