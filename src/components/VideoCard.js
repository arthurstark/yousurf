import React from 'react';
import Panel from 'react-bootstrap/lib/Panel';
import PropTypes from 'prop-types';

const panelStyle = {
    overflow: 'hidden',
    height: 430
};

const thumbnailStyle = {
    width: '100%'
};

const titleStyle = {
    wordWrap: 'break-word',
    marginBottom: 20
};

const descriptionStyle = {
    wordWrap: 'break-word'
};

const VideoCard = ({thumbnailSrc, title, description, onClick}) => (
    <Panel onClick={onClick} style={panelStyle}>
        <img fill src={thumbnailSrc} style={thumbnailStyle} alt={title}/>
        <h4 style={titleStyle}>{title}</h4>
        <p style={descriptionStyle}>{description}</p>
    </Panel>
);

VideoCard.propTypes = {
    thumbnailSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    onClick: PropTypes.func
};

export default VideoCard;
