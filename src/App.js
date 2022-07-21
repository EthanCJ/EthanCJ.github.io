import Navbar from './Navbar';
import Home from './Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
              <Routes>
                <Route path="/" element={<Home/>}/>

                <Route path="/create" element={<Create/>}/>

                <Route path="/answer" element={<Answer/>}/>

                <Route path="/question" element={<Question/>}/>

                <Route path="/posts/:id" element ={<PostDetails/>}/>

                <Route path="*"element={<NotFound/>}/>
              </Routes>
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
