import React from "react";
import Track from "../Track/Track";
import SaveToSpotifyButton from "../SaveToSpotifyButton/SaveToSpotifyButton";

function PlayList(props) {
  const playlistName = props.playlistName;
  if (props.playlist == null) return;
  const toRender = props.playlist.map((item) => {
    return (
      <>
        <li>
          <Track id={item.id} name={item.name} artist={item.artist} album={item.album}></Track>
          <button onClick={() => props.removeSongFromPlaylist(item)}>-</button>
        </li>
      </>
    );
  }); //each item from playlist from app.js is turned into li element.
  return (
    <>
      <input value={props.playlistName} onChange={props.onChange}/> {/* single input for playlist */}
      <ul>{toRender}</ul> {/* from function above, contains each track */}
      <button onClick={props.onClick}>save to spotidy offline</button>
      <SaveToSpotifyButton token={props.token} playlistName={props.playlistName} tracks={props.playlist}></SaveToSpotifyButton> {/* send data into the fetch? */}
    </>
  );
}

export default PlayList;

// pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist.
// Consider using state to store information such as the playlist name and playlist tracks.
