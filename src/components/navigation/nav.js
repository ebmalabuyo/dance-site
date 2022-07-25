import React from "react";
import { Link} from "react-router-dom"
import "./nav.css"
import pic from "../../image/um_logo.png"
import {FaBars} from "react-icons/fa"

const Nav = () => {
    const [toggle, toggleNav] = React.useState(false)

    const overlayStyle = {
        listStyle: 'none',
        display:'flex',
        flexDirection: 'column',
        gap: '1rem ',
    }

    const overlayContainer = {
        transform: toggle ? 'translate(10%, 79%)' : 'translate(200%, 78%)',
        zIndex: '1',
        backgroundColor: '#21222A',
        padding: '.9rem',
        borderRadius: '4%',
        transition: 'transform 0.4s ease-in-out',
        // boxShadow: '0px 2.98256px 7.4564px rgba(0.3, .2, 0.5, .2)',
    }

    const NavBarsRotate = {
        transform: toggle ? 'rotate(-90deg)' : 'rotate(0deg)',
        transition: 'transform 0.4s'
    }
    
    function activateNav() {
        toggleNav(prev => !prev)
    }

    function closeNav() {
        toggleNav(false)
    }
    return (
        <nav>
            <div className="logo">
                <img className="um-logo" src={pic} alt=''></img>
                <Link to = "/">
                <p>United Movement</p>
                </Link>
            </div>
            <ul className="nav-items">
                <li className="nav-routes"><Link  to = "/">Home</Link></li>
                <li  className="nav-routes"><Link to = "/about">About</Link></li>
                <li  className="nav-routes"><Link to = "/illuminate">Illuminate</Link></li>
                <li  className="nav-routes"><Link to = "/contact">Contact</Link></li>
            </ul>
            <FaBars onClick = {activateNav} size={32} className="menu-bars" style={NavBarsRotate}/>
            <div style = {overlayContainer} className='overlaycont'>
                <ul style={overlayStyle}>
                    <li className="nav-routes"><Link onClick={closeNav} to = "/">Home</Link></li>
                    <li  className="nav-routes"><Link onClick={closeNav} to = "/about">About</Link></li>
                    <li  className="nav-routes"><Link onClick={closeNav} to = "/illuminate">Illuminate</Link></li>
                    <li  className="nav-routes"><Link onClick={closeNav} to = "/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default Nav