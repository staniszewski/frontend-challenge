import config from './config'

const {
  API_KEY,
  OMDB_API_URL  
} = config;

export const getMoviesByTitle = () => `${OMDB_API_URL}?apiKey=${API_KEY}&s=`
