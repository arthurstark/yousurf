import React from 'react';
import SearchBar from "../components/SearchBar";

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }

    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    render() {
        return <SearchBar onChange={this.handleFilterTextChange}/>;
    }
}

export default SearchContainer;

