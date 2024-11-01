import React, { useState } from "react";
import styles from "./SearchResults.module.css";
import TrackList from "../Tracklist/Tracklist";

function SearchResults(props) {
  const [searchResults, setSearchResults] = useState(props.data);

  return (
    <>
      <h2>Results</h2>
      <TrackList data={searchResults}></TrackList>
    </>
  );
}

export default SearchResults;

//call everything from here.
