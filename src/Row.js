import React from 'react'
import "./Row.css"
function Row({image, isLargeImage}) {
    return (
        <div className = 'main'>
             {/* <p>Infinity (JBL) Glide</p> */}
             <img className ={`row__image ${isLargeImage && "row__imageLarge"}` }src = {image}></img>
        </div>
    )
}

export default Row;