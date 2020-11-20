import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <div className="ui image">
                <img alt={video.snippet.title} src={video.snippet.thumbnails.medium.url} />
            </div>
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>
    );
};

export default VideoItem;