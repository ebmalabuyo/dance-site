import React from "react";
import { Link } from "react-router-dom"
import "./nav.css"
import pic from "../../image/um_logo.png"
import {FaBars} from "react-icons/fa"

const Nav = () => {
    const [toggle, toggleNav] = React.useState(false)

    const overlayStyle = {
        listStyle: 'none',
        position: 'absolute',
        left: '50%',
        top: '45%',
        transform: 'translate(-50%, -50%)'
    }

    const NavBarsRotate = {
        transform: toggle ? 'rotate(90deg)' : 'rotate(0deg)',
        transition: 'transform 0.4s'
    }
    
    function activateNav() {
        toggleNav(prev => !prev)
    }

    // const contStyle = {
    //     height: toggle ? '91vh' : '0',
    //     width: '100vw',
    //     backgroundColor: 'blue',
    //     transition: 'height 0.4s ease-in-out'
    // }

    return (
        <nav>
            <div className="logo">
                <img className="um-logo" src={pic} alt=''></img>
                <Link to = "/">
                <p>United Movement</p>
                </Link>
            </div>
            <ul className="nav-items">
                <li className="nav-routes"><Link to = "/">Home</Link></li>
                <li  className="nav-routes"><Link to = "/about">About</Link></li>
                <li  className="nav-routes"><Link to = "/illuminate">Illuminate</Link></li>
            </ul>
            <FaBars onClick = {activateNav} size={32} className="menu-bars" style={NavBarsRotate}/>
            <div className='overlay'>
            <ul style={overlayStyle}>
                <li className="nav-routes"><Link to = "/">Home</Link></li>
                <li  className="nav-routes"><Link to = "/about">About</Link></li>
                <li  className="nav-routes"><Link to = "/illuminate">Illuminate</Link></li>
            </ul>
            </div>

        </nav>
    )
}
export default Nav