import React from 'react';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";

const VideoList = ({videos}) => (
    <div>
        {videos.map((video, i) => {

            let videoId = video.id.videoId;
            let thumbnailSrc = video.snippet.thumbnails.medium.url;
            let title = video.snippet.title;
            let description = video.snippet.description;

            return (
                <Col sm={3}>
                    <Link to={`/watch/${videoId}`} key={i}>
                        <VideoCard
                            thumbnailSrc={thumbnailSrc}
                            title={title}
                            description={description}
                        />
                    </Link>
                </Col>
            );
        })}
    </div>
);

export default VideoList;
