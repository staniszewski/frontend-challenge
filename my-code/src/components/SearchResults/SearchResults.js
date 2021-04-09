import React, {useContext, useEffect, useState}   from 'react';
import { useLocation, useParams } from 'react-router';
import axios from 'axios';
import { getMoviesByTitle } from '../../config/endpointConfig'
import icon from '../../layout/icon-arrow-grey.svg'
import { AppContext } from '../Store/Store';


const SearchResults = () => {
  const [results, setResults] = useState([])
  const [state, dispatch] = useContext(AppContext);
  useEffect( ()=> {
    async function fetchData(){await axios.get(getMoviesByTitle() + state.search.searchValue).then(setResults)};
    fetchData();
  }, [])
  
  return <div className="search-results"><h1><img src={icon}></img>Search results page: under construction</h1></div>
}

export default SearchResults;