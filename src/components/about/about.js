import React from "react";
import "./about.css"
import Desc from "./desc";
import hhcc from "../../image/hhcc.jpg"
import aboutlogo from "../../image/aboutlogo.jpg"
// import {ScrollContainer, ScrollPage, Animator, batch, Move} from "react-scroll-motion"
import Footy from "../footy/footy";
import Banner from "../banner";
import BackToTopButton from "../backToTopButton";

function About() {
    const items = [
        {
            id:'hhcc',
            background: '',
            img: hhcc,
            title: '',
            desc: "Founded in 2014 by Daniel Phil Kim, the club was originally formed as Hip Hop Choreo Club. The purpose of the club was to provide consistent training to dancers of all skill levels and create an environment for individuals to grow together."
        },
        {
            id:'about-logo',
            background: '#282D35',
            img: aboutlogo,
            title:'Rebranding to United Movement, our organization continues to foster the Cal Poly dance community, welcoming dancers from all backgrounds and foundations. ',
            desc:"As a non-audition group, we welcome all new memebers to come train with us and help grow the San Luis Obispo dance scene."
        }
    ]


    return(
        <div className="about-cont">
            <Banner 
                desc = 'About Us'
                id = 'about-top'
            />
            {items.map((item, index) => {
                return (
                            <Desc 
                            id = {item.id}
                            background = {item.background}
                            key = {index}
                            img = {item.img}
                            title = {item.title}
                            desc = {item.desc}
                            />
                )
            })
            }
        <BackToTopButton />
        <Footy />
        
        </div>
    )
        }

export default About