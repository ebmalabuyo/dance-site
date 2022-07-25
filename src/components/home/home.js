import React from "react";
import "./home.css"
import Slide2 from "./slide2";
import Slide3 from "./slide3";
import Slider from "./slider";
import Footy from "../footy/footy.js"
import BackToTopButton from "../backToTopButton";


function Home() {
    return(
        <div className="home-cont">
            <div className="cont" >
                {<Slider/>}
            </div>
            {<Slide2 />}
            {<Slide3 />}
            {<Footy/>}
            {<BackToTopButton />}
        </div>
    )
}


export default Home

