import { Link } from "react-router-dom";
import brandLogo from './assets/brand_logo.png';

function Navbar(){
    return(
    <nav className="flex justify-around pt-4">
        <div>
            <img src={brandLogo} />
        </div>
        <ul className="flex">
            <li className="px-2"><Link to="/" >HOME</Link></li>
            <li className="px-2"><Link to="/GetStarted" >GAME</Link></li>
            <li className="px-2"><Link to="/About">ABOUT</Link></li>
            <li className="px-2"><Link to="/Contact">CONTACT</Link></li>

        </ul>
        <button className="bg-red-500 p-1 text-white px-4 py-1">Login</button>
    </nav>
    )
}

export default Navbar;