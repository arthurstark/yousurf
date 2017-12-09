import React from 'react';
import YouTube from 'react-youtube';

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

export default Watch;
