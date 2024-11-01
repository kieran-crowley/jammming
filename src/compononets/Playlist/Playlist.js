import React from "react";
import styles from "./Playlist.module.css";
import Track from "../Track/Track";

function PlayList(props) {
  if (props.data == null) return;
  const toRender = props.data.map((item, i) => {
    return (
      <>
        <li>
          <Track
            key={item.i}
            id={item.i}
            song={item.song}
            artist={item.artist}
            album={item.album}
          ></Track>
           <button onClick={()=> props.playlistfunction(item)}>-</button>
        </li>
      </>
    );
  });
  return (
    <div>
        <input value={props.playlistName} onChange={props.setName}></input>
        <ul>{toRender}</ul>
    </div>
  );
}

export default PlayList;

// pass the playlist tracks from the component responsible for the Playlist to the component responsible for the Tracklist.
// Consider using state to store information such as the playlist name and playlist tracks.
