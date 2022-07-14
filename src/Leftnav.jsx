import {Link} from 'react-router-dom';

const LeftNav = () => {
    return ( 
        <div className="leftnav">
            <div className="links">
                <table>
                    <tr><Link to="/">Home</Link></tr>
                    <tr><Link to="/create">Post</Link></tr>
                    <tr><Link to="/create">Demander</Link></tr>
                    <tr><Link to="/create">Repondre</Link></tr>
                    <tr><Link to="/create">Messages</Link></tr>

                </table>
            </div>
        </div>
     );
}
 
export default LeftNav;