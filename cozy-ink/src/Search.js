import React from 'react';
import {MdSearch} from 'react-icons/md';

const SearchBar = ({handleSearch}) => {
    return(
        <div className = "search-bar">
            <MdSearch className = "search-icons" size = '1.5em'/>
            <input onChange = {(event) => handleSearch(event.target.value)} type = "text" placeholder = "Search for notes..." />
        </div>
    );
}

export {SearchBar}