import {Link} from 'react-router-dom';
import homeLogo from './Assets/homeLogo.png'
import postLogo from './Assets/postLogo.png'
import questionLogo from './Assets/questionLogo.png'
import answerLogo from './Assets/answerLogo.png'
import { useTranslation } from "react-i18next";

const LeftNav = () => {

    const { t, i18n } = useTranslation();
    return ( 
        <div className="leftnav">
            <div className="links">
                <table>
                    <tr><td><Link to="/" >
                        <img src={homeLogo} alt="logo" height={40} width={40}/>
                        <h1>{t("home")}</h1>
                    </Link></td></tr>
                    <tr><td><Link to="/create">
                        <img src={postLogo} alt="logo" height={40} width={40}/>
                        <h1>{t("post")}</h1>
                    </Link></td></tr>
                    <tr><td><Link to="/question">
                        <img src={questionLogo} alt="logo" height={40} width={40}/>
                        <h1>{t("ask")}</h1>
                    </Link></td></tr>
                    <tr><td><Link to="/answer">
                        <img src={answerLogo} alt="logo" height={40} width={40}/>
                        <h1>{t("answer")}</h1>
                    </Link></td></tr>
                </table>
            </div>
        </div>
     );
}
 
export default LeftNav;