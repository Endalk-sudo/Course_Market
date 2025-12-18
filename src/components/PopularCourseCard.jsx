import React from 'react'
import "./PopularCourseCard.css"
import Rating from './Rating'

const PcCourseCard = ({ title, instructor, rating, price, imgUrl }) => {
  return (
    <div className='p-course-card'>
      <div className='course-card-img-layer'>
        <img className='course-card-img' src={imgUrl} alt="" />
      </div>
      <div className='course-card-content'>
        <h4 className='course-title'>{title.length > 35 ? `${title.slice(0, 35)}...` : title}</h4>
        <p className='course-instructor'>{instructor}</p>
        <span>
          <Rating rating={rating} size={16} />
          {` (${rating})`}</span>
        <p className='course-price'>${price}</p>
      </div>
    </div>
  )
}

export default PcCourseCard