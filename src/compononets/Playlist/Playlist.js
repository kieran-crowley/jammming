import React, { useState } from "react";
import styles from "./Playlist.module.css";
import TrackList from "../Tracklist/Tracklist";

function PlayList(props) {
  // const [playListTracks, setplayListTracks] = useState([]);
  // const [playListName, setPlayListName] = useState([]);

  // setplayListTracks((prev) => {
  //     return [props.tracks, ...prev];
  // })

  // setPlayListName((prev) => {
  //     return [props.tracks, ...prev];
  // })

  return (
    <>
      <h1>{props.playlistname}</h1>
      <TrackList data={props.tracks}></TrackList>
    </>
  );
}

export default PlayList;

// pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist.
// Consider using state to store information such as the playlist name and playlist tracks.
