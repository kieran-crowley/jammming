import React from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function TrackList(state) {
  const toRender = state.data.map((item) => {
    return (
      <ul>
        <li key={item.key}>
          <Track
            id={item.id}
            song={item.song}
            artist={item.artist}
            album={item.album}
          ></Track>
        </li>
      </ul>
    );
  });

  return <>{toRender};</>;
}

export default TrackList;
