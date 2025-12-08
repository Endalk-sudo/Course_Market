import React from 'react'
import "./CarouselCard.css"

const CarouselCard = ({title,subtitle,img }) => {
  return (
      <div  className="carousel-slide">
        <div className='carousel-card'>
            <div className="carsousel-card-content">
                <h2 className="carousel-card-title">{subtitle}</h2>
                <p className="carousel-card-subtitle">{title}</p>
                <button className='carsousel-card-button'>View Course</button>
            </div>
            <div className="carsousel-card-img-container">
                <img className='carsousel-card-img' src={img} alt='person-image'  />
            </div>
        </div>
      </div>
  )
}

export default CarouselCard