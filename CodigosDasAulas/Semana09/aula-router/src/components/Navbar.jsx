import {Link} from "react-router-dom"

function Navbar() {
    return ( 
        <nav>
            <Link 
            className="link" 
            to="/">Home</Link>

            <Link 
            className="link" 
            to="/sobre">Sobre</Link>
        </nav>
     );
}

export default Navbar;