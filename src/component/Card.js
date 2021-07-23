import React from 'react'
import headerImg from '../assets/img/cardimg.png';
const Card = () => {
  return (
    <div className="card">

      <div className="card-media">
        <img src={headerImg} alt="" />
      </div>

      <div className="card-body">

        <div className="card-content">
          <h3>An Above Average Experience</h3>
          <p>Travel to the premiere mountain tops of New Zealand with our guided tours. Take in the majestic scenary and witness beauty.</p>
        </div>

        <div>
          <i className="button-link fa fa-external-link" />
        </div>
        
      </div>

    </div>
  )
}

export default Card
