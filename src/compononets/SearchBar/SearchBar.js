import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchButton from "../SearchButton/SearchButton";
import SearchResults from "../SearchResults/SearchResults";

function SearchBar(props) {
  const [value, setValue] = useState("Search Song");
  console.log(props.searchResults);
  const results = props.searchResults;
  console.log("search bar", results);

  const onChange = ({ target }) => {
    setValue(target.value);
  };

  const filterResults = (results) => {
    console.log(results);
    let formatProps = [];
    if (results == null) return;

    results.forEach((item) => {
      formatProps.push({
        id: item.id,
        name: item.name,
        artists: item.artists[0].name,
        album: item.album.name,
        uri: item.uri,
      });
    });
    props.setSearchResults(formatProps);
  };

  const search = async () => {
    const name = value || "hello";
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
        // props.setSearchResults(resultJson.tracks.items);
        filterResults(resultJson.tracks.items);
        console.log("search bar", resultJson.tracks.items);
        console.log("search results, saved: ", props.searchResults);
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
        <input id="input" type="text" value={value} onChange={onChange}></input>
      </form>
      <ul></ul>
      <SearchButton onClick={search}></SearchButton>
      <SearchResults function={props.function} results={results}></SearchResults>
    </div>
  );
}

export default SearchBar;
