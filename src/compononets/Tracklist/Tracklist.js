import React, { useState } from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function TrackList(props) {
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
          <button onClick={()=> props.playlistfunction(item)}>+</button>
        </li>
      </>
    );
  });

  return <ul>{toRender}</ul>;
}

export default TrackList;
