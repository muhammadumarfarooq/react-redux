import React from "react";
import { connect } from "react-redux";

const SelectedSong = ({ song }) => {
  if (!song) return <h1>Select a song</h1>;
  return (
    <div>
      <h1>Details For:</h1>
      <h2>Title: {song.title}</h2>
      <h3>Length: {song.duration}</h3>
    </div>
  );
};

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SelectedSong);
