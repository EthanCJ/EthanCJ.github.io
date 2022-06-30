import {Link} from 'react-router-dom';

const  Navbar= () => {
    return (  
        <nav className="navbar">
            <h1>Navbar title</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Make Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;