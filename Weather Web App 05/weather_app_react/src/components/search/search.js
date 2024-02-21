import React, { useState } from 'react'
import { AsyncPaginate } from 'react-select-async-paginate'

const Search = ({onSearchChange}) => {
    const [search, setSearch] = useState(null);

    const handleOnChange = (searchData) =>{
        setSearch(searchData);
        onSearchChange(searchData);
    }
  return (
    <div>
      <h2>Search for Weather </h2>
      <AsyncPaginate 
        placeholder="Search for City"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
      />
    </div>
  )
}

export default Search