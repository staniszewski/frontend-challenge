import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { getMoviesByTitle } from '../../config/endpointConfig'

const SearchPage = () => {
  const [results, setResults] = useState([])
  useEffect( ()=> {
    async function fetchData(){await axios.get(getMoviesByTitle()+ 'why').then(setResults)};
    fetchData();
  }, [])
  console.log(results.data)
  return <h1>Hi im searching</h1>
}

export default SearchPage;