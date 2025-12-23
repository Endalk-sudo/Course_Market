import React from 'react'
import { Link } from "react-router-dom";
import "./CourseCard.css"
import Rating from '../components/Rating';

const CourseCard = ({ id, title, img, instructor, rating, price, handleAddToCart }) => {

  return (
    <div className='course-card'>
      <Link className='course-card-Link' to={`/course-detail/${id}`}>
        <div className='img-layer'>
          <img src={img} alt="" />
          <div className='course-card-badge'>
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
            {rating}
          </div>
        </div>
        <div className="course-content-container">
          <div className="course-content">
            <h3 className='course-title'>{title}</h3>
            <p className='course-instructor'>{instructor.name}</p>
            <span>
              <Rating rating={rating} size={18} />
              {` (${rating})`}
            </span>
            <p className='course-price'>${price}</p>
          </div>
        </div>
      </Link>
      <button className='course-card-btn' onClick={() => handleAddToCart(id)}>Add to Cart</button>
    </div>
  )
}

export default CourseCard