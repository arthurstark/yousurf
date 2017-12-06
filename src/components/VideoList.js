import React from 'react';
import VideoCard from './VideoCard';

const VideoList = ({videos}) => (
    <div>
        {videos.map((video, i) => {

            let thumbnailSrc = video.snippet.thumbnails.medium.url;
            let title = video.snippet.title;
            let description = video.snippet.description;

            return (
                <VideoCard
                    key={i}
                    thumbnailSrc={thumbnailSrc}
                    title={title}
                    description={description}
                />
            );
        })}
    </div>
);

export default VideoList;
