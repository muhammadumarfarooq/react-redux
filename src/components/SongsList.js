import React from "react";
import SongListItem from "./SongListItem";
import { selectSong } from "../actions";
import { connect } from "react-redux";

const SongsList = ({ songs, selectSong }) => {
  return songs.map(song => (
    <SongListItem song={song} selectSong={selectSong} key={song.title} />
  ));
};

const mapStateToProps = state => {
  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps, { selectSong })(SongsList);
