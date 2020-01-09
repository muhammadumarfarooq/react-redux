import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "Sun Raha hai", duration: "22:03" },
    { title: "Dil ye mera", duration: "2:05" },
    { title: "Me dhundne ko zamanay me", duration: "5:55" },
    { title: "Dil diya gallah", duration: "3:12" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") return action.payload;
  return selectedSong;
};

export default combineReducers({
  songs: songReducer,
  selectedSong: selectedSongReducer
});
