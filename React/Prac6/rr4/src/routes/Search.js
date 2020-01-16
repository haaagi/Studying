import React from 'react';

const Search = ({location}) => {
    return (
        <div>
            {new URLSearchParams(location.search).get('keyword')}검색창
        </div>
    );
};

export default Search;