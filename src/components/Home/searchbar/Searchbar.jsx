import { Search } from '@mui/icons-material';
import React from 'react';
import './search.css';
const SearchBar = ({value, changeInput}) => {
    return (
        <div className='searchBar-wrap'>
            <Search className="searchBar-icon" />
            <input
             type="text"
              placeholder='Woodland Hills'
              value={value}
              onChange={changeInput}
               />
        </div>
    );
};

export default SearchBar;