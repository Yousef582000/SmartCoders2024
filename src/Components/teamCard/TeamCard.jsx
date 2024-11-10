import React from 'react'
import "./teamcard.css"
const TeamCard = (props) => {
  return <div className="user__card">
    <div className="user__img">
<img  lazy="loading" src={props.img} alt="" />
    </div>
    <div className="card__content">
        <h3>{props.title}</h3>
        <h4>"{props.name}"</h4>
    </div>
  </div>
}

export default TeamCard