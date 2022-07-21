import capLogo from './Assets/capLogo.png'
import {Row,Col,Navbar} from 'react-bootstrap';



function createNavBar() {
    return (  
        <Navbar>
            <Row>
                    <Col>
                        <img src={capLogo} className="logo" alt="logo" height={60} width={100}/>
                        <h1>Psy-STEM</h1>
                    </Col>   
                    <Col className="navCol2">
                        <div class="input-group" className='justify-content-md-center'>
                            <input type="search" class="form-control rounded" className="search" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </Col>
                    <Col>
                    </Col>
            </Row>
        </Navbar>
    );
}
 
export default createNavBar;