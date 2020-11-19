import React from 'react';
import SearchBar from './SearchBar';

class VideoPlayer extends React.Component {
    render() {
        return (
            <div className="ui container">
                <SearchBar />
            </div>
        );
    }
}

export default VideoPlayer;