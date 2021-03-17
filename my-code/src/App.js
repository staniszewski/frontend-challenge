import './App.css';
import MainPage from './components/MainPage/MainPage';
import SearchResults from './components/SearchResults/SearchResults';
import {
  Router,
  Route,
  Redirect,
  Switch
} from 'react-router';
import history from './config/history'
const App = () => { 
 return (
  <>
    <Router history={history} >
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/search" component={SearchResults} />
        <Redirect from="*" to="/" />
      </Switch>
    </Router>
  </>
 )
}

export default App;
