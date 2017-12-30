import React from 'react';
import SearchResults from './SearchResults';

const SearchBox = (props) => {
    return (
        <div className='searchContainer'>
            <input type='text' value={props.searchInput} onChange={props.inputHandler} placeholder="Search for a product..." />
            {props.searchResults ? <SearchResults results={props.searchResults} input={props.searchInput} /> : null}
        </div>
    );
}

export default SearchBox;