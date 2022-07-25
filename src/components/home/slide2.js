import React from "react";
import "./home.css"
import { Link } from "react-router-dom"

export default function Slide2() {
    return (
        
        <div className="slide2-cont">
            
            <div className = "middle-cont">
                <div className="content">
                
                    <div className="content-text">
                    <p className="gic">Growth in Community, Community in Growth</p>
                    <br/>
                    <p>We are United Movement, Cal Poly's non-audition dance team. We serve to foster an inclusive, safe environment where people of all backgrounds are welcome to grow together as dancers and individuals.</p>
                    <h2 className="about-button"><Link to= "/about">About Us</Link></h2>
                    </div>
                    <iframe
                        src="https://www.youtube.com/embed/rlW86P3AuCE"
                        frameborder="0"
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    />
                
                </div>
            </div>
          
        </div>
    )
}