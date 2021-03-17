import './App.css';
import MainPage from './components/MainPage/MainPage';
import SearchResults from './components/SearchResults/SearchResults';
import {
  Router,
  Route,
  Redirect,
  browserHistory
} from 'react-router';
const App = () => { 
 return (
  <>
    <Router history={browserHistory} >
      <Route path="/" component={MainPage} />
      <Route path="/search" component={SearchResults} />
      <Redirect from="*" to="/" />
    </Router>
  </>
 )
}

export default App;
