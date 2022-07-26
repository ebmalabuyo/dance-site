import React from "react";
import { useEffect, useState } from "react";
import arrow from "../components/home/icons/right-arrow.svg"

function BackToTopButton() {
    const [topButton, setTopButton] = useState(false)

    useEffect(() =>{
        window.addEventListener("scroll", () => {
            if(window.scrollY > 100) {
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
            <button
            className="arrowup"
            onClick={scrollUp}
            style ={{
                position: 'fixed', 
                bottom: '18%',
                right: '4%',
                width: '2.5rem',
                zIndex: '1',
                borderRadius:'50%',
                opacity:'0.4',
                height: '2.5rem',
                transform: 'rotate(-90deg)',
                padding: '0.5rem'
                }}
            >
                <img
                    alt = ''
                    src= {arrow}
                    />
                    
    
            </button>
            }
        </div>
    )
}

export default BackToTopButton