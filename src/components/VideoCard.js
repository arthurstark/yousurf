import React from 'react';
import Col from 'react-bootstrap/lib/Col';
import Panel from 'react-bootstrap/lib/Panel';

const panelStyle = {
    height: 375
};

const thumbnailStyle = {
    width: '100%'
};

const VideoCard = ({thumbnailSrc, title, description, onClick}) => (
    <Col sm={3}>
        <Panel onClick={onClick} style={panelStyle}>
            <img fill src={thumbnailSrc} style={thumbnailStyle} alt={title}/>
            <h4>{title}</h4>
            <p>{description}</p>
        </Panel>
    </Col>
);

export default VideoCard;