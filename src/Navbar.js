import capLogo from './capLogo.png'

const  Navbar= () => {
    return (  
        <nav className="navbar">
            <img src={capLogo} alt="logo" height={100} width={100}/>

            <h1>Psy-STEM</h1>
        </nav>
    );
}
 
export default Navbar;