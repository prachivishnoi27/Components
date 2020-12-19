// Action Creater
export const selectSong = song => {
    // argument song is the song which is to be selected
    // Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};