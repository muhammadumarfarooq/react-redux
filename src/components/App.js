import React from "react";
import "./style.css";
import SongsList from "./SongsList";
import SelectedSong from "./SelectedSong";
const App = () => {
  return (
    <div style={style}>
      <div>
        <SongsList />
      </div>
      <SelectedSong />
    </div>
  );
};

const style = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridColumnGap: "2rem"
};

export default App;
