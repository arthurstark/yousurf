import React from 'react';
import FieldGroup from 'react-bootstrap/lib/FormControl';

const barStyle = {
    margin: 15,
};

const SearchBar = ({onChange}) => (
    <div style={barStyle}>
        <FieldGroup
            id="formControlsText"
            type="text"
            label="Text"
            placeholder="Search"
            onChange={onChange}
        />
    </div>
);

export default SearchBar;
