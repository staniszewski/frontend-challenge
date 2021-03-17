import React, {useState} from 'react';
import history from '../../config/history'
const SearchBar = () => { 
  const [searchInput, setSearchInput] = useState('');
  const getSearchInput = event => setSearchInput(event.target.value);
  console.log(searchInput)

  const onKeyDown = event => {
    if(event.key === 'Enter') {
      history.push({
        pathname:'/search',
        search: `?title=${searchInput}`
      })
    }
  }
  return <div className='search-bar'><input title='What are you looking for?' onKeyDown={event => onKeyDown(event)} onChange={event => getSearchInput(event)}></input></div>
}

export default SearchBar;