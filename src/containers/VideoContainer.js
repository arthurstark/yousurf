import React from 'react';
import VideoList from '../components/VideoList';
import {getVideos} from "../api";

class VideoContainer extends React.Component {

    onClick = () => {
        alert('test');
    };

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

        this.loadVideos = this.loadVideos.bind(this);
    }

    componentDidMount() {
        getVideos(this.loadVideos);
    }

    render() {
        return <VideoList
            videos={this.state.videos}
        />
    };

    loadVideos(response) {
        this.setState({
            videos: response.items
        });
    }
}

export default VideoContainer;