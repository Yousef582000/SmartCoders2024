import React from 'react'
import "./card-slider.css"

const CardSlider = (props) => {
  return (
    <div className='card_slider'>
        <div className="img__card">
            <img  lazy="loading" src={props.image} alt="" />
        </div>
       <div className='btn__slider'>
        <h3> {props.name} </h3>
       <button className='btn__contact'>
            <a href="/">Go To webSite</a>
        </button>
       </div>

    </div>
  )
}

export default CardSlider