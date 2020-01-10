import React from "react";

const SongListItem = ({ song, selectSong }) => {
  return (
    <div style={style}>
      <h3>{song.title.toUpperCase()}</h3>
      <button onClick={() => selectSong(song)}>Select</button>
    </div>
  );
};

const style = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center"
};

export default SongListItem;
