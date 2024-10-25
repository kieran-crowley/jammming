import "./App.css";
import TrackList from "./compononets/Tracklist/Tracklist";

function App() {
  const trackList = [
    { id: 1, song: "kieran-can-sing", artist: "kieran", album: "kieransAlbum" },
    { id: 2, song: "sarin-can-sing", artist: "sarin", album: "sarinsAlbum" },
    {
      id: 3,
      song: "annabeth-can-sing",
      artist: "annabeth",
      album: "annabethsAlbum",
    },
  ];

  return <TrackList data={trackList}></TrackList>;
}
export default App;
