import React from 'react';
import VideoCard from './VideoCard';
import {Link} from "react-router-dom";
import {Col} from "react-bootstrap";
import {truncate} from "../utils/string-utils";
import PropTypes from 'prop-types';

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

VideoList.propTypes = {
    videos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.shape({
                videoId: PropTypes.string.isRequired
            }).isRequired,
            snippet: PropTypes.shape({
                thumbnails: PropTypes.shape({
                    medium: PropTypes.shape({
                        url: PropTypes.string.isRequired
                    }).isRequired
                }),
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired
            }).isRequired
        })
    ).isRequired
};

export default VideoList;
