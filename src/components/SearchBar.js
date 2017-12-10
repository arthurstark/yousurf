import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const barStyle = {
    margin: 15
};

const SearchBar = ({onChange, onSubmit}) => (
    <form style={barStyle} onSubmit={onSubmit}>
        <FormGroup>
            <InputGroup>
                <FormControl
                    id="formControlsText"
                    type="text"
                    label="Text"
                    placeholder="Search"
                    onChange={onChange}
                />
                <InputGroup.Addon onClick={onSubmit}>
                    <FontAwesome name='search'/>
                </InputGroup.Addon>
            </InputGroup>
        </FormGroup>
    </form>
);

SearchBar.propTypes = {
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default SearchBar;
