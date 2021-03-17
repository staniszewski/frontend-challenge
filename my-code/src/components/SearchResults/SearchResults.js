import React, {useEffect, useState}   from 'react';
import axios from 'axios';
import { getMoviesByTitle } from '../../config/endpointConfig'

const SearchResults = () => {
  const [results, setResults] = useState([])
  useEffect( ()=> {
    async function fetchData(){await axios.get(getMoviesByTitle()+ 'why').then(setResults)};
    fetchData();
  }, [])
  console.log(results.data)
  return <div className="search-results"><h1>Search results page: under construction</h1></div>
}

export default SearchResults;