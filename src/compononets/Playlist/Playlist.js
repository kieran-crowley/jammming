import React, { useState } from "react";
import SaveToSpotifyButton from "../SaveToSpotifyButton/SaveToSpotifyButton";
import TrackList from "../Tracklist/Tracklist";
import styles from "./Playlist.module.css";

function PlayList(props) {
  const [playlistName, setPlaylistName] = useState("");

  const setName = ({ target }) => {
    setPlaylistName(target.value);
  };

  return (
    <div className={styles.personalStyle}>
      <input value={playlistName} placeholder={"Playlist Name"} onChange={setName} />
      <TrackList tracks={props.playlist} function={props.function} type={"remove"}></TrackList>
      <SaveToSpotifyButton token={props.token} playlistName={playlistName} tracks={props.playlist} setPlaylist={props.setPlaylist}></SaveToSpotifyButton>
    </div>
  );
}

export default PlayList;
