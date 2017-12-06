import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

const panelStyle = {
    height: 375
};

const thumbnailStyle = {
    width: '100%'
};

const titleStyle = {
    wordWrap: 'break-word'
};

const descriptionStyle = {
    wordWrap: 'break-word'
};

const VideoCard = ({thumbnailSrc, title, description, onClick}) => (
    <Col sm={3}>
        <Panel onClick={onClick} style={panelStyle}>
            <img src={thumbnailSrc} style={thumbnailStyle} alt={title} fill/>
            <h4 style={titleStyle}>{title}</h4>
            <p style={descriptionStyle}>{description}</p>
        </Panel>
    </Col>
);

export default VideoCard;
