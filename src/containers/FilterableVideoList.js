import React from 'react';
import SearchContainer from './SearchContainer';
import VideoContainer from './VideoContainer';

class FilterableVideoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: false,
            searchSubmitted: false
        };

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
        this.onFilterTextSubmit = this.onFilterTextSubmit.bind(this);
    };

    onFilterTextChange(filterText) {
        this.setState({
            filterText: filterText,
            searchSubmitted: false
        });
    }

    onFilterTextSubmit() {
        this.setState({
            searchSubmitted: true
        });
    }

    render() {
        return (
            <section>
                <SearchContainer
                    onFilterTextChange={this.onFilterTextChange}
                    onFilterTextSubmit={this.onFilterTextSubmit}
                />
                <VideoContainer
                    filterText={this.state.filterText}
                    searchSubmitted={this.state.searchSubmitted}
                />
            </section>
        );
    }
}

export default FilterableVideoList;
