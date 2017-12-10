import React from 'react';
import PropTypes from 'prop-types';

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

NoResults.propTypes = {
    filterText: PropTypes.string.isRequired
};

export default NoResults;
