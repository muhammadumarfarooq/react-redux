import React, { useState } from "react";
import "./style.css";
import SongsList from "./SongsList";
import SelectedSong from "./SelectedSong";
const App = () => {
  const [songsList] = useState([
    { title: "abc", length: 1 },
    { title: "xyz", length: 100 },
    { title: "dfc", length: 5 },
    { title: "Sun Raha hai na tu", length: 5000 }
  ]);
  const [selectedSong, setSelectedSong] = useState(null);

  const setSong = song => {
    setSelectedSong(song);
  };

  return (
    <div style={style}>
      <SongsList setSong={setSong} songsList={songsList} />
      {selectedSong !== null ? (
        <SelectedSong selectedSong={selectedSong} />
      ) : (
        undefined
      )}
      {selectedSong === null ? (
        <h1>Select A song to see it here...</h1>
      ) : (
        undefined
      )}
    </div>
  );
};

const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridColumnGap: "2rem"
};

export default App;
