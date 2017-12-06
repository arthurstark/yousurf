import React from 'react';
import VideoList from '../components/VideoList';
import {getVideos} from "../api";
import InfiniteScroll from 'react-infinite-scroller';

class VideoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            nextAPIPageToken: false
        };

        this.setVideos = this.setVideos.bind(this);
        this.loadVideos = this.loadVideos.bind(this)
    }

    setVideos(response) {
        this.setState({
            videos: this.state.videos.concat(response.items),
            nextAPIPageToken: response.nextPageToken,
        });
    }

    loadVideos() {
        getVideos(this.setVideos, this.state.nextAPIPageToken, this.props.filterText);
    }

    resetVideos() {
        this.setState({
            videos: [],
            nextAPIPageToken: false
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchSubmitted) {
            this.resetVideos();
        }
    }

    render() {
        const loader = <div className="loader text-center" style={{width: '100%'}}>Loading ...</div>;

        return (
            <InfiniteScroll
                loadMore={this.loadVideos}
                initialLoad={true}
                loader={loader}
                hasMore={true}>

                <VideoList
                    videos={this.state.videos}
                />

            </InfiniteScroll>
        )
    };

}

export default VideoContainer;
