// Action Creator (!Person Dropping of the form)
export const selectSong = song => {
  // Action (!Form)
  return {
    type: "SONG_SELECTED",
    payload: song
  };
};
