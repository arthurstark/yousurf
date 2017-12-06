import React from 'react';
import SearchBar from "../components/SearchBar";

class SearchContainer extends React.Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onFilterTextSubmit();
    }

    render() {
        return <SearchBar onChange={this.handleChange} onSubmit={this.handleSubmit}/>;
    }
}

export default SearchContainer;

