import React from 'react';
import Row from 'react-bootstrap/lib/Row';
import VideoCard from './VideoCard';

const rowPadding = {
    padding: 15
};

const VideoList = ({videos}) => (
    <Row style={rowPadding}>
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
    </Row>
);

export default VideoList;
