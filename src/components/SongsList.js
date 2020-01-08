import React from "react";
import SongListItem from "./SongListItem";

const SongsList = ({ songsList, setSong }) => {
  return (
    <div>
      {songsList.map(song => (
        <div style={style}>
          <h3>{song.title.toUpperCase()}</h3>
          <button onClick={() => setSong(song)}>Select</button>
        </div>
      ))}

      {/* <SongListItem /> */}
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

export default SongsList;
