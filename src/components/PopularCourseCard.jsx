import React from 'react'
import "./PopularCourseCard.css"

const PcCourseCard = ({title,instructor,rating,price,imgUrl}) => {
  return (
    <div className='p-course-card'>
        <div className='course-card-img-layer'>
            <img className='course-card-img' src={imgUrl} alt="" />
        </div>
        <div className='course-card-content'>
            <h4 className='course-title'>{title.length > 35 ? `${title.slice(0,35)}...` : title}</h4>
            <p className='course-instructor'>{instructor}</p>
            <p className='course-rating'>{rating}/<span>5</span></p>
            <p className='course-price'>${price}</p>
        </div>
    </div>
  )
}

export default PcCourseCard