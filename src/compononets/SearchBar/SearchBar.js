import React, { useState } from "react";
import styles from "./SearchBar.module.css";
import SearchButton from "../SearchButton/SearchButton";

function SearchBar() {
  const [value, setValue] = useState("");

  function onChange({ target }) {
    setValue(target.value);
  }

  function submit() {
    alert(value);
  }

  return (
    <div>
      <form onSubmit={submit}>
        <input id="input" type="text" value={value} onChange={onChange}></input>
      </form>
      <SearchButton onClick={submit}></SearchButton>
    </div>
  );
}

export default SearchBar;
