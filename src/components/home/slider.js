import React from "react";
import './slider.css'
import dub from '../../image/dub.JPG'
import nate from '../../image/nate.jpg'
import teampic2 from '../../image/teampic2.jpg'
import teamshow from '../../image/teamshow.jpg'
import chillin from '../../image/chillin.JPG'
import eli from "../../image/eli.jpg"
import BtnSlider from "./BtnSlider.js";
import { useSpring, animated } from "react-spring"



export default function Slider() {
    const lstpics = [
        teampic2,
        nate,
        teamshow,
        dub,
        chillin,
        eli
        
    ]

    React.useEffect(()=>{
        const interval = setInterval(()=>{
            nextSlide();        
        }, 4000);
        return () => clearInterval(interval);
    });

    const [slideIndex, setSlideIndex] = React.useState(1)
    const nextSlide = () => {
        if (slideIndex !== lstpics.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === lstpics.length){
            setSlideIndex(1)
        }
    }

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1) {
            setSlideIndex(lstpics.length)
        }
        }

    const styles1 = useSpring({
        from: {opacity: 0},
        to: { opacity: 1},
        config: {duration: 1000}
    })

    return (
        <div className="container-slider">
            <animated.div style = {styles1}>
            {lstpics.map((obj, index) => {
                return (
                    <div  key = {index} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                        <img 
                            src={obj}
                            alt=''
                        ></img>
                    </div>
                )
            })}
       
        <BtnSlider moveSlide={nextSlide} direction={'next'}/>
        <BtnSlider moveSlide={prevSlide} direction={'prev'}/>
        </animated.div>
        </div>
    )
}