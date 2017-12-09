import React from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import FontAwesome from 'react-fontawesome';

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

export default SearchBar;
