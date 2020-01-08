import React from "react";

const SelectedSong = ({ selectedSong }) => {
  const { title, length } = selectedSong;
  return (
    <div>
      <h1>Details For:</h1>
      <h2>Title: {title}</h2>
      <h3>Length: {length}</h3>
    </div>
  );
};

export default SelectedSong;
