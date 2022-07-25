import React from "react"
import {useSpring, animated} from "react-spring"


export default function Banner(props) {
    const styles1 = useSpring({
        from: {opacity: 0},
        to: { opacity: 1},
        config: {duration: 1000}
    })
    return( 
        <animated.div style = {styles1}>
        <div className="top" id = {props.id}>
            <p className="about-title">{props.desc}</p>
        </div>
        </animated.div>
    )

}