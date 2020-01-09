import React from "react";
// import SongListItem from "./SongListItem";
import { selectSong } from "../actions";
import { connect } from "react-redux";
const SongsList = ({ songs, selectSong }) => {
  return (
    <div>
      {songs.map(song => (
        <div key={song.title} style={style}>
          <h3>{song.title.toUpperCase()}</h3>
          <button onClick={() => selectSong(song)}>Select</button>
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

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
