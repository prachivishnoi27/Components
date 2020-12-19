import { combineReducers } from 'redux';

const songsReducerList = () => {
    return [
        {title: 'Main Yahoon Hu', duration: '6:05'},
        {title: 'Ek Main aur ek tu', duration: '4:10'},
        {title: 'Zindagi do pal ki', duration: '3:30'},
        {title: 'Pyar ka nagma hai', duration: '3:50'}
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === 'SONG_SELECTED'){
        return action.payload;
    }
    return selectedSong;
}

export default combineReducers({
    songs: songsReducerList,
    selectedSong: selectedSongReducer
});