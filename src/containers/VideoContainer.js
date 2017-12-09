import React from 'react';
import VideoList from '../components/VideoList';
import {getVideos} from "../api";
import InfiniteScroll from 'react-infinite-scroller';
import FontAwesome from 'react-fontawesome';

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

        this.setState({
            videos: this.state.videos.concat(response.items),
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

        return (
            <InfiniteScroll
                loadMore={this.loadVideos}
                initialLoad={true}
                loader={loader}
                hasMore={this.state.hasMoreAPIPages}>

                <VideoList
                    videos={this.state.videos}
                />

            </InfiniteScroll>
        )
    };

}

export default VideoContainer;
