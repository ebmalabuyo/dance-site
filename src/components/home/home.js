import React from "react";
import "./home.css"
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slider from "./slider";
import Footy from "../footy/footy.js"


function Home() {
    return(
        <div className="home-cont">

            
            {/* <h1 className="first">Growth in Community</h1> */}
            {/* <div className = "slide1">
                <img className = "teampic" src = {team} alt=''></img>
            </div> */}
            {/* <h1 className="second">Community in Growth</h1> */}

            <div className="cont" >
                {<Slider/>}
            </div>
           

            {<Slide2 />}
            {<Slide3 />}
            
            {<Footy/>}
           
           
        </div>
    )
}


export default Home

