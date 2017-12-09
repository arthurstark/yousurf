import React from 'react';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {truncate} from "../utils/string-utils";

const VideoList = ({videos}) => (
    <div>
        {videos.map((video, i) => {

            let videoId = video.id.videoId;
            let thumbnailSrc = video.snippet.thumbnails.medium.url;
            let title = video.snippet.title;
            let description = video.snippet.description;

            description = truncate.apply(description, [200, true]);

            return (
                <Col sm={4} key={i}>
                    <Link to={`/watch/${videoId}`} style={{textDecoration: 'none'}}>
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
