import React from "react";
import Track from "../Track/Track";
import SaveToSpotifyButton from "../SaveToSpotifyButton/SaveToSpotifyButton";
import TrackList from "../Tracklist/Tracklist";

function PlayList(props) {
  console.log("tracks from playlist", props.playlist);

  return (
    <div>
      <input value={props.playlistName} onChange={props.onChange} /> {/* single input for playlist */}
      <TrackList tracks={props.playlist} function={props.function} type={"remove"}></TrackList>
      <button onClick={props.saveOfflinePlaylist}>save to spotidy offline</button>
      <SaveToSpotifyButton token={props.token} playlistName={props.playlistName} tracks={props.playlist}></SaveToSpotifyButton>
    </div>
  );
}

export default PlayList;
