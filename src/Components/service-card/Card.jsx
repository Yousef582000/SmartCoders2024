import React from 'react'
import "./card.css"
const Card = (props) => {
  return  <div className="card-servvice">
  <div className="card_imag">
  <img  lazy="loading"  src={props.image} alt="" />
  </div>
  
  <div className="content">
    <h3>{props.title}</h3>
  <p> 
    {props.description}
     </p>
  </div>
</div>
}

export default Card