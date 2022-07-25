import React from "react"
import workshop from "../../image/Workshop.png"
import performances from "../../image/performances.JPG"
import lume from "../../image/lume.jpg"

function Card(props) {
    return (
    
        <div className="card-cont">
            <p className="card-titles">{props.title}</p>
            <a href = {props.link} className="img-cont">
                <img alt = '' className = "imgs"src = {props.img}></img>
            </a> 
        </div>
    )
}

export default function Slide3() {

    const cardlist = [
        {
            img: workshop,
            title: "Thursday Workshops",
            link: "https://www.instagram.com/unitedmvmtslo/?hl=en"
        },
        
        {
            img: performances,
            title: "Performances",
            link: "https://www.youtube.com/c/unitedmvmtslo"
        },

        {
            img: lume,
            title: "Illuminate 2022",
            link: "https://www.youtube.com/watch?v=FHQx33jxBsE&t=5655s"
        }
    ]

    return (
        <div className="slide3">
            <div className="main-slide3">
                    {cardlist.map(item => {
                        return (
                            <Card 
                                img = {item.img}
                                title = {item.title}
                                link = {item.link}
                            />
                        )
                    })}
            </div>
        </div>
    )
}
