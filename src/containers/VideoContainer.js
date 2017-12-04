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

        this.loadVideos = this.loadVideos.bind(this);
        this.loadMore = this.loadMore.bind(this)
    }

    loadVideos(response) {
        this.setState({
            videos: this.state.videos.concat(response.items),
            nextAPIPageToken: response.nextPageToken
        });
    }

    loadMore(page) {
        console.log(this.state.nextAPIPageToken);
        getVideos(this.loadVideos, this.state.nextAPIPageToken);
    }

    render() {
        const loader = <div className="loader text-center">Loading ...</div>;

        return (
            <InfiniteScroll
                loadMore={this.loadMore}
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
