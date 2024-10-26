import "./App.css";
import React from "react";
import PlayList from "./compononets/Playlist/Playlist";
import TrackList from "./compononets/Tracklist/Tracklist";

function App() {
  const tracks = [
    { id: 1, song: "kieran-can-sing", artist: "kieran", album: "kieransAlbum" },
    { id: 2, song: "sarin-can-sing", artist: "sarin", album: "sarinsAlbum" },
    { id: 3, song: "annabeth-can-sing", artist: "annabeth", album: "annabethsAlbum" },
  ];

  const userAddsName = `kierans family charts`;
  const userAddsSong = [tracks[0], tracks[2]]

  return (
    <>
      <TrackList data={tracks}></TrackList>
      <PlayList playlistname={userAddsName} tracks={userAddsSong}></PlayList>
    </>
  );
}
export default App;

// Your Jammming web app should allow users to add songs from the search results to their custom playlist.
// implement a method that adds a selected song from the search results track list to the user’s custom playlist.
// The method should be triggered when the user clicks an “add” button displayed next to each track in the search results list.
