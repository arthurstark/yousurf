import React from 'react';
import SearchContainer from './SearchContainer';
import VideoContainer from './VideoContainer';
import Navbar from 'react-bootstrap/lib/Navbar';

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
                <Navbar fixedTop={true}>
                    <SearchContainer
                        onFilterTextChange={this.onFilterTextChange}
                        onFilterTextSubmit={this.onFilterTextSubmit}
                    />
                </Navbar>

                <VideoContainer
                    filterText={this.state.filterText}
                    searchSubmitted={this.state.searchSubmitted}
                />

            </section>
        );
    }
}

export default FilterableVideoList;
