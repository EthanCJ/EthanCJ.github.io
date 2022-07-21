import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Create from './Create';
import PostDetails from './PostDetails';
import NotFound from './NotFound';
import LeftNav from './Leftnav';
import { Col,Row,Container } from 'react-bootstrap';
import Answer from './Create answer';
import Question from './Create question';
import TopicsHome from './TopicsHome';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Container>
          <Row>
            <Col><LeftNav/></Col>
            <Col className="col2">
            <div className="content">
              <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route exact path="/create">
                    <Create/>
                </Route>

                <Route exact path="/answer">
                    <Answer/>
                </Route>

                <Route exact path="/question">
                    <Question/>
                </Route>

                <Route exact path="/posts/:id">
                    <PostDetails/>
                </Route>

                <Route path="*">
                    <NotFound/>
                </Route>
              </Switch>
            </div>
            </Col>
            <Col><TopicsHome/></Col>
          </Row>
        </Container>

        
      </div>
    </Router>
  );
}

export default App;
