import React from "react";


export default function Desc(props) {
    return (
        
        
        <div style = {{backgroundColor: props.background}}className="desc-cont">

            <div className="mid-cont">

                <div className="content">
                    {props.id === 'hhcc' && <img id= {props.id} className= "pics"src={props.img} alt= ''></img>}
                    <div className="text-content">
                        <p>{props.title}</p>
                        <p>{props.desc}</p>
                        {props.id === 'about-logo' && <button>Join</button>}
                    </div>
                    {props.id ==='about-logo' && <img id= {props.id} className= "pics"src={props.img} alt= ''></img>}
                </div>
            </div>
        </div>
    
    )
}