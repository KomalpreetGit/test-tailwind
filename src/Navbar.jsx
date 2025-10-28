import brandLogo from './assets/brand_logo.png';

function Navbar(){
    return(
    <nav className="flex justify-around pt-4">
        <div>
            <img src={brandLogo} />
        </div>
        <ul className="flex">
            <li className="px-2">MENU</li>
            <li className="px-2">LOCATION</li>
            <li className="px-2">ABOUT</li>
            <li className="px-2">CONTACT</li>
        </ul>
        <button className="bg-red-500 p-1 text-white px-4 py-1">Login</button>
    </nav>
    )
}

export default Navbar;