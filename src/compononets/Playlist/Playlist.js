import React from "react";
import Track from "../Track/Track";
import SaveToSpotifyButton from "../SaveToSpotifyButton/SaveToSpotifyButton";

function PlayList(props) {
  const playlistName = props.playlistName;
  if (props.data == null) return;
  const toRender = props.data.map((item) => {
    return (
      <>
        <li>
          <Track id={item.id} key={item.key} song={item.song} artist={item.artist} album={item.album}></Track>
          <button onClick={() => props.removeSongFromPlaylist(item)}>-</button>
        </li>
      </>
    );
  }); //each item from playlist from app.js is turned into li element.
  return (
    <div>
      <input value={props.playlistName} onChange={props.onChange}></input> {/* single input for playlist */}
      <ul>{toRender}</ul> {/* from function above, contains each track */}
      <button onClick={props.onClick}>save to spotidy</button>
      <SaveToSpotifyButton playlistName={props.playlistName} data={props.data}></SaveToSpotifyButton> {/* send data into the fetch? */}
    </div>
  );
}

export default PlayList;

// pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist.
// Consider using state to store information such as the playlist name and playlist tracks.
