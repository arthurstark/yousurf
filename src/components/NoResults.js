import React from 'react';

class NoResults extends React.Component {

    shouldComponentUpdate() {
        return false;
    }

    render() {
        return (
            <h3>No results for <strong>{this.props.filterText}</strong>.</h3>
        );
    }
}

export default NoResults;
