import React, { useState } from "react";
import styles from "./Tracklist.module.css";
import Track from "../Track/Track";

function TrackList(props) {
  if (props.tracks == null) return;

  const toRender = props.tracks.map((item, i) => {
    return (
      <>
        <li>
          <Track id={item.id} name={item.name} artist={item.artists} album={item.album} preview={item.preview}></Track>
          <button onClick={() => props.function(item)}>{props.type}</button>
        </li>
      </>
    );
  });

  return <ul>{toRender}</ul>;
}

export default TrackList;
