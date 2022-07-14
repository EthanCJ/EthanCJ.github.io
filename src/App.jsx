import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import PostDetails from './PostDetails';
import NotFound from './NotFound';
import LeftNav from './Leftnav';

function App() {
  const title='This is the website title';

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <LeftNav/>
        <div className="content">
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>

            <Route exact path="/create">
                <Create/>
            </Route>

            <Route exact path="/posts/:id">
                <PostDetails/>
            </Route>

            <Route path="*">
                <NotFound/>
            </Route>
          </Switch>
        </div>
        
      </div>
    </Router>
  );
}

export default App;
