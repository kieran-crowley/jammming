import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchResults from "../SearchResults/SearchResults";

function SearchBar(props) {
  const [value, setValue] = useState("");
  const results = props.searchResults;

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const filterResults = (results) => {
    let formatProps = [];
    if (results == null) return;
    console.log("results object", results);

    results.forEach((item) => {
      formatProps.push({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        album: item.album.name,
        uri: item.uri,
        preview: item.preview_url,
      });
    });
    props.setSearchResults(formatProps);
  }; //seatch results saved in above format.

  const search = async () => {
    const name = value || "randomised";
    const URL = `https://api.spotify.com/v1/search?q=${name}&type=track`;

    const options = {
      method: "GET",
      headers: {
        Authorization: "Bearer " + props.token,
      },
    };
    try {
      const result = await fetch(URL, options);
      if (result.ok) {
        const resultJson = await result.json();
        filterResults(resultJson.tracks.items);
      } else {
        throw Error("error finding song");
      }
    } catch (err) {
      console.log(err);
    }
  }; //both saves and returns, only need one?.

  return (
    <div className={styles.SearchBarStyle}>
      <form onSubmit={search}>
        <input id="input" type="text" value={value} onChange={onChange} placeholder="Search a Song"></input>
      </form>
      <ul></ul>
      <SearchButton onClick={search}></SearchButton>
      {results && <SearchResults function={props.function} results={results}></SearchResults>}
    </div>
  );
}

export default SearchBar;
