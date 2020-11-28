import React from 'react';

function SearchBar(props) {
    return (
        <form className="form-inline mx-auto app-header">
            <input 
                onChange={(e) => props.setSearchValue(e.target.value)}
                className="form-control mr-sm-2"
                itemType="search"
                placeholder="Search by Last Name"
                aria-label="Search" />
            <button className="btn btn-outline-dark my-2 my-sm-0" itemType="submit">Search</button>
        </form>
    )
};

export default SearchBar;

