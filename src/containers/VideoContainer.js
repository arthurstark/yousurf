import React from 'react';
import VideoList from '../components/VideoList';
import {getVideos} from "../api";

class VideoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            nextAPIPageToken: undefined
        };

        this.loadVideos = this.loadVideos.bind(this);
    }

    loadVideos(response) {
        this.setState({
            videos: this.state.videos.concat(response.items),
            nextAPIPageToken: response.nextPageToken
        });
    }

    componentDidMount() {
        getVideos(this.loadVideos, this.state.nextAPIPageToken);
    }

    render() {

        return <VideoList
            videos={this.state.videos}
        />
    };

}

export default VideoContainer;
