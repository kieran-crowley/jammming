import "./App.css";
import SearchBar from "./compononets/SearchBar/SearchBar";
import Button from "./compononets/Button/Button";
import SearchResults from "./compononets/SearchResults/SearchResults";


function App() {
  //import api here. 
  return (
    <div>
      <SearchBar> </SearchBar>
      <Button value='Search'></Button>
      <SearchResults></SearchResults>


    </div>
  );
}

export default App;
