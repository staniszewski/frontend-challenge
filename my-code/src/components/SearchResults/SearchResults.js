import React, {useContext, useEffect, useState}   from 'react';
import { useLocation, useParams } from 'react-router';
import axios from 'axios';
import { getMoviesByTitle } from '../../config/endpointConfig'
import icon from '../../layout/icon-arrow-grey.svg'
import { AppContext } from '../Store/Store';
import DispatchActions from '../Store/DispatchActions'

const { UPDATE_SEARCH_VALUE } = DispatchActions;
const SearchResults = () => {
  const [results, setResults] = useState([])
  const [state, dispatch] = useContext(AppContext);
  const { search } = useLocation();
  const currentSearch = new URLSearchParams(search).get('title')
  
  useEffect( ()=> {
    if(state.search.searchValue !== currentSearch) {
      dispatch({type: UPDATE_SEARCH_VALUE, payload: currentSearch})
    } 
    const fetchData = async () => {
      const { data: response } = await axios.get(getMoviesByTitle() + currentSearch)
      response.Response === "True" && setResults(response.Search) 
    };
    fetchData();
  }, [])
  
console.log(results)
  return <div className="search-results"><h1><img src={icon}></img>Search results page: under construction</h1>
  <ul>
    { results.map((result, index) => 
      <li key={index}>
          {JSON.stringify(result)}
      </li>
      )}
  </ul>
  </div>
}

export default SearchResults;