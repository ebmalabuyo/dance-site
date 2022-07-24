import React from "react";
import { Link } from "react-router-dom"
import "./nav.css"
import pic from "../../image/um_logo.png"
const Nav = () => {

    return (
        <nav>
            <div className="logo">
                <img className="um-logo" src={pic} alt=''></img>
                <p>United Movement</p>
            </div>
            {/* <div className="menu-bars">
                <i className="fas fa-times"></i>
            </div> */}
            <ul className="nav-items">
                <li className="nav-routes"><Link to = "/">Home</Link></li>
                <li  className="nav-routes"><Link to = "/about">About</Link></li>
                <li  className="nav-routes"><Link to = "/illuminate">Illuminate</Link></li>
            </ul>
        </nav>
    )
}
export default Nav