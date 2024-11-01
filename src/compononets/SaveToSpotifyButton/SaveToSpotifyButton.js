import React from "react";
import styles from "./SaveToSpotifyButton.module.css";

function SaveToSpotifyButton(props) {
  return (
    <>
      <button> {props.children}</button>
    </>
  );
}

export default SaveToSpotifyButton;
