import React from 'react';
import SearchContainer from './SearchContainer';
import VideoContainer from './VideoContainer';

class FilterableVideoList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            filterText: ''
        };

        this.onFilterTextChange = this.onFilterTextChange.bind(this);
    };

    onFilterTextChange(filterText) {
        console.log(filterText);
        this.setState({
            filterText: filterText
        });
    }

    render() {
        return (
            <div>
                <SearchContainer
                    onFilterTextChange = {this.onFilterTextChange}
                />
                <VideoContainer/>
            </div>
        );
    }
}

export default FilterableVideoList;