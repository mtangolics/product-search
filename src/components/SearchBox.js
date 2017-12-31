import React from 'react';
import SearchResults from './SearchResults';

let selectedProductIndex = -1;

const SearchBox = (props) => {

    const handleKeyPress = (event) => {
        if(event.key === 'ArrowDown') {
            selectedProductIndex = (selectedProductIndex + 1) % 5;
        }
        else if(event.key === 'ArrowUp') {
            selectedProductIndex = selectedProductIndex === -1 ? 4 : selectedProductIndex - 1;
        }
        else if(event.key === 'Enter' && selectedProductIndex !== -1) {
            props.selectionHandler(props.searchResults[selectedProductIndex]);
        }
    };

    return (
        <div className='searchContainer'>
            <input type='text' value={props.searchInput} onChange={props.inputHandler} onKeyDown={handleKeyPress} placeholder="Search for a product..." />
            <SearchResults results={props.searchResults} input={props.searchInput} selectionHandler={props.selectionHandler} curSelection={selectedProductIndex} />
        </div>
    );
}

export default SearchBox;