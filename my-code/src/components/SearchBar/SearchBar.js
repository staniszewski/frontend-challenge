import React, { useContext } from 'react';
import history from '../../config/history'
import { AppContext } from '../Store/Store';
import DispatchActions from '../Store/DispatchActions';

const { UPDATE_SEARCH_VALUE } = DispatchActions;

const SearchBar = () => { 
  const [state, dispatch]= useContext(AppContext);
  const onChange = event => setSearchTerm(event.target.value)
  const onKeyDown = event => {
    if(event.key === 'Enter') {      
      history.push({
        pathname:'/search',
        search: `?title=${searchTerm}`
      })
      event.preventDefault();
      dispatch({type: UPDATE_SEARCH_VALUE, payload: searchTerm})
    }
  }

  return (
    <div className='search-bar'>
      <input title='What are you looking for?' 
        onChange={event=> onChange(event)}
        onKeyDown={event => onKeyDown(event)}
      >
      </input>
    </div>
  )
}

export default SearchBar;