import React from "react";
import { useEffect, useState } from "react";
import arrowup from "../image/arrow-up.svg"

function BackToTopButton() {
    const [topButton, setTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY !== 0) {
                setTopButton(true)
            } else {
                setTopButton(false)
            }
        })
    }, [])


function scrollUp() {
    window.scrollTo({
        top: '0', 
        behavior: 'smooth'
    })

}

    return (
        <div className="button-container">
            {topButton &&
            <arrowup 
                className='arrowup'
                style ={{
                    position: 'fixed', 
                    bottom: '18%',
                    right: '4%',
                    width: '40px',
                    fontSize: '2rem',
                    zIndex: '1',
                    borderRadius:'35%',
                    outline: 'solid',
                    opacity:'0.5',
                    transform: 'rotate(-90deg)',
                    color: '#21222A',
                    backgroundColor: 'white',
                    marginLeft: '2%'
                    }}
                onClick={scrollUp}>
            ></arrowup>
            }
        </div>
    )
}

export default BackToTopButton