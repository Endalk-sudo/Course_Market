import React from 'react'
import "./CourseCard.css"

const CourseCard = ({ title, img, instructor, rating, price }) => {
  return (
    <div className='course-card'>
      <div className='img-layer'>
        <img src={img} alt="" />
      </div>
      <div className="course-content-container">
        <div className="course-content">
          <h3 className='course-title'>{title}</h3>
          <p className='course-instructor'>{instructor}</p>
          <p className='course-rating'>{rating}/<span>5</span></p>
          <p className='course-price'>${price}</p>
        </div>
        <button className='course-card-btn'>Add to Cart</button>
      </div>
    </div>
  )
}

export default CourseCard