import React from 'react';
import VideoList from '../components/VideoList';
import {getVideos} from "../api";
import InfiniteScroll from 'react-infinite-scroller';
import FontAwesome from 'react-fontawesome';
import NoResults from '../components/NoResults';

class VideoContainer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            nextAPIPageToken: false,
            hasMoreAPIPages: true
        };

        this.setVideos = this.setVideos.bind(this);
        this.loadVideos = this.loadVideos.bind(this)
    }

    setVideos(response) {

        let hasMoreAPIPages = false;

        if (response.nextPageToken) {
            hasMoreAPIPages = true;
        }

        let videos = this.state.videos.concat(response.items);

        if (response.items.length === 0) {
            videos = undefined;
        }

        this.setState({
            videos: videos,
            nextAPIPageToken: response.nextPageToken,
            hasMoreAPIPages: hasMoreAPIPages
        });
    }

    loadVideos() {
        getVideos(this.setVideos, this.state.nextAPIPageToken, this.props.filterText);
    }

    resetVideos() {
        this.setState({
            videos: [],
            nextAPIPageToken: false,
            hasMoreAPIPages: true
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.searchSubmitted) {
            this.resetVideos();
        }
    }

    render() {
        const loader = <FontAwesome
            name='circle-o-notch'
            size='2x'
            spin
            style={{
                width: '100%',
                color: 'gray',
                marginTop: 20
            }}
            className='text-center'
        />;

        let videoList = <VideoList videos={this.state.videos}/>;

        if (this.state.videos === undefined) {
            videoList = <NoResults filterText={this.props.filterText}/>;
        }

        return (
            <InfiniteScroll
                loadMore={this.loadVideos}
                initialLoad={true}
                loader={loader}
                hasMore={this.state.hasMoreAPIPages}>

                {videoList}

            </InfiniteScroll>
        )
    };

}

export default VideoContainer;
