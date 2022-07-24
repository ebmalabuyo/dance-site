import React from "react";
import "./about.css"
import Desc from "./desc";
import hhcc from "../../image/hhcc.jpg"
import aboutlogo from "../../image/aboutlogo.jpg"
import { useSpring, animated } from "react-spring"
import {ScrollContainer, ScrollPage, Animator, batch, Move} from "react-scroll-motion"

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

const styles1 = useSpring({
    from: {opacity: 0},
    to: { opacity: 1},
    config: {duration: 1000}
})

    return(
        
        <div className="about-cont">
            <animated.div style = {styles1}>
                        <div className="about-top">
                            <p className="about-title">About Us</p>
                        </div>
            </animated.div>
            <ScrollContainer>
                <ScrollPage>
                    
            {items.map((item, index) => {
                return (
                    <Animator animation={batch(Move())}>
                            <Desc 
                            id = {item.id}
                            background = {item.background}
                            key = {index}
                            img = {item.img}
                            title = {item.title}
                            desc = {item.desc}
                            />
                     </Animator>
                    
                )
            })
            
            }
                   
                </ScrollPage>
            </ScrollContainer>
        </div>
        
    )
        }

export default About