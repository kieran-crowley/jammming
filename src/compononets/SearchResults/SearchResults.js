import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../Tracklist/Tracklist";

function SearchResults(props) {
  return (
    <>
      <h2>Results</h2>
      <TrackList function={props.function} tracks={props.results} type={"add"}></TrackList>
    </>
  );
}

export default SearchResults;
