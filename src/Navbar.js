import capLogo from './Assets/capLogo.png'
import i18n from "./i18n";
import { useTranslation } from "react-i18next";
import {Row,Col,Navbar} from 'react-bootstrap';
import { t } from 'i18next';


const createNavBar=()=> {


    const handleLanguage = (e) => { 
        i18n.changeLanguage(e.target.value);
    }
    return (  
        <Navbar>
            <Row>
                    <Col>
                        <img src={capLogo} className="logo" alt="logo" height={60} width={100}/>
                        <h1>{t("title")}</h1>
                    </Col>   
                    <Col className="navCol2">
                        <div class="input-group" className='justify-content-md-center'>
                            <input type="search" class="form-control rounded" className="search" placeholder={t("search")} aria-label="Search" aria-describedby="search-addon" />
                        </div>
                    </Col>
                    <Col className="navCol3">
                        <select className="langButton" onClick={handleLanguage}>
                            <option value="en">English</option>
                            <option value="fr">French</option>
                        </select>
                    </Col>
            </Row>
        </Navbar>
    );
}
 
export default createNavBar;