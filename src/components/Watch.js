import React from 'react';
import YouTube from 'react-youtube';
import PropTypes from 'prop-types';

const opts = {
    height: '480',
    width: '100%',
    playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
    }
};

const Watch = ({match}) => (
    <div className='text-center'>
        <YouTube
            videoId={match.params.videoId}
            opts={opts}
        />
    </div>
);

Watch.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
            videoId: PropTypes.string.isRequired
        }).isRequired
    }).isRequired
};

export default Watch;
