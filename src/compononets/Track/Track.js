import React from "react";
import styles from "./Track.module.css";

function Track(props) {
  console.log(props);
  return (
    <div id={props.id}>
      <p>{props.artist}</p>
      <p>{props.name}</p>
      <p>{props.album}</p>
      <p>{props.uri}</p>
      <audio controls>
        <source src={props.preview} />
      </audio>
      <br></br>
    </div>
  );
}

export default Track;
