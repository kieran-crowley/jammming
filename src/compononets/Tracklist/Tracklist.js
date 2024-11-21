import React, { useState } from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function TrackList(props) {
  console.log(props.tracks);

  if (props.tracks == null) return;

  const toRender = props.tracks.map((item, i) => {
    return (
      <>
        <li>
          <Track id={item.id} name={item.name} artist={item.artists} album={item.album}></Track>
          <button onClick={() => props.addsong(item)}>+</button>
        </li>
      </>
    );
  });

  return <ul>{toRender}</ul>;
}

export default TrackList;
