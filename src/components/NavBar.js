import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css';
import {FaGripLines} from 'react-icons/fa';


const Navbar = () => {
    const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOpen => !isOpen)
    }

    return (
        <div className="navcenter">
             <div className="navheader">
                 <Link to='/' className="logoicon">Buffetologist</Link>
                 <button type="button" className="logobtn" onClick={toggleNav}>
                 <FaGripLines className="logoicon" />
                 </button>
        </div>   
                <ul className={isOpen ? `${"navlinks"} ${"shownav"}` : `${"navlinks"}`}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/income-statement">Income Statement</Link></li>
                    <li><Link to="/">Balance Sheet</Link></li>
                    <li><Link to="/">Cash-Flow Statement</Link></li>
                </ul>
            </div>
    )
}


export default Navbar;
